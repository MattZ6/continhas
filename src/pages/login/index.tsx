import Image from 'next/image';
import { Wallet, GoogleLogo } from 'phosphor-react';

import { LoginPageStyles as Styles } from './styles';

export default function LoginPage() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.LoginContainer>
          <Styles.LogoContainer>
            <Wallet size={40} />
          </Styles.LogoContainer>

          <Styles.Title>
            Suas finanças
            <br />
            <b>descomplicadas</b>
          </Styles.Title>

          <Styles.Description>
            Entre e <b>facilite</b> o controle de sua vida financeira.
          </Styles.Description>

          <Styles.GoogleButton>
            <GoogleLogo type="button" weight="bold" size={24} />
            Continuar com o Google
          </Styles.GoogleButton>
        </Styles.LoginContainer>
      </Styles.Content>

      <Styles.Aside />
    </Styles.Container>
  );
}
