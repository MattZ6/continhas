import { PageHeaderStyles as Styles } from './styles';

type Props = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, subtitle, children }: Props) {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Subtitle>{subtitle}</Styles.Subtitle>
      </Styles.Content>

      {children && <Styles.Controls>{children}</Styles.Controls>}
    </Styles.Container>
  );
}
