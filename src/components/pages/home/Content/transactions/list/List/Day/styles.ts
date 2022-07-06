import { styled } from '@styles/stitches.config';

export namespace DayStyles {
  export const Header = styled('time', {
    fontSize: '$small',
    lineHeight: '$small',
    color: '$defaultTextLoContrastColor',
    fontWeight: '500',

    paddingTop: '$small',
    paddingBottom: '$small',
    paddingLeft: '$medium',
    paddingRight: '$medium',
  });
}
