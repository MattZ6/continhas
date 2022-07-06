import { IconProps } from 'phosphor-react';

import { ScreenMessageStyles as Styles } from './styles';

type IconType = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

type Props = {
  icon?: IconType;
  title: string;
  message: string;
  button?: {
    text: string;
    onPress: () => void;
  };
};

export function ScreenMessage({ icon: Icon, title, message, button }: Props) {
  return (
    <Styles.Container>
      {Icon && (
        <Styles.IconContainer>
          <Icon size={48} />
        </Styles.IconContainer>
      )}
      <Styles.Title>{title}</Styles.Title>
      <Styles.Message>{message}</Styles.Message>
      {button && (
        <Styles.Button onClick={() => button.onPress()}>
          {button.text}
        </Styles.Button>
      )}
    </Styles.Container>
  );
}
