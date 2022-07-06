import { yupResolver } from '@hookform/resolvers/yup';
import { CurrencyDollar, X, TextT, CalendarBlank, Watch } from 'phosphor-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useBalance } from '@hooks/useBalance';
import { useMonths } from '@hooks/useMonths';

import { CreateTransactionService } from '@services/simpleFinancesAPI/createTransaction';

import { FormField, TransactionTypeSelect } from './components';
import { TransactionFormStyle as Styles } from './styles';

type TransactionType = 'INCOME' | 'OUTCOME';

type FormScheme = {
  name: string;
  value: number;
  date: Date;
  time: string;
};

const NOW = new Date();

type Props = {
  onCloseRequest: () => void;
};

export function TransactionForm({ onCloseRequest }: Props) {
  const [selectedType, setSelectedType] = useState<TransactionType>('OUTCOME');
  const { refetch: reloadMonths, selectedMonth } = useMonths();
  const { refetch: reloadBalance } = useBalance();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Obrigatório')
      .trim()
      .min(3, 'Pelo menos 3 caracteres'),
    value: yup
      .number()
      .required('Obrigatório')
      .typeError('Valor inválido')
      .min(0.01, 'No mínimo R$ 0,01'),
    date: yup
      .date()
      .typeError('Valor inválido')
      .required('Obrigatório')
      .min(
        new Date(NOW.getFullYear() - 2, 1, 1),
        `A partir de 01/01/${NOW.getFullYear() - 2}`
      ),
    time: yup.string().required('Obrigatório'),
  });

  const { register, handleSubmit, formState, reset } = useForm<FormScheme>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<FormScheme> = async data => {
    const { name, value, date, time } = data;
    const [hours, minutes] = time.split(':');

    date.setHours(Number(hours), Number(minutes));

    try {
      await CreateTransactionService.execute({
        title: name,
        type: selectedType,
        value,
        date: date.toISOString(),
      });

      reset();

      reloadMonths();

      if (
        selectedMonth?.value.getUTCFullYear() === date.getUTCFullYear() &&
        selectedMonth?.value.getUTCMonth() === date.getUTCMonth()
      ) {
        reloadBalance();
      }

      // TODO: Recarregar a lista de meses e recarregar a lista de transações
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles.Container open>
      <Styles.Header>
        <Styles.Title>Nova conta</Styles.Title>

        <Styles.BackButton onClick={onCloseRequest}>
          <X size={24} />
        </Styles.BackButton>
      </Styles.Header>

      <Styles.Form onSubmit={handleSubmit(submit)}>
        <Styles.TypeFieldContainer>
          <TransactionTypeSelect
            selected={selectedType}
            onChange={setSelectedType}
          />
        </Styles.TypeFieldContainer>

        <FormField
          type="text"
          label="Título"
          placeholder="O título da transação"
          icon={TextT}
          error={formState.errors.name?.message}
          {...register('name')}
        />

        <FormField
          type="tel"
          label="Valor"
          placeholder="O valor da transação"
          icon={CurrencyDollar}
          error={formState.errors.value?.message}
          {...register('value')}
        />

        <Styles.FieldsRow>
          <FormField
            type="date"
            label="Data"
            icon={CalendarBlank}
            error={formState.errors.date?.message}
            {...register('date')}
          />

          <FormField
            type="time"
            label="Hora"
            icon={Watch}
            error={formState.errors.time?.message}
            {...register('time')}
          />
        </Styles.FieldsRow>

        <Styles.SubmitButton type="submit">Salvar</Styles.SubmitButton>
      </Styles.Form>
    </Styles.Container>
  );
}
