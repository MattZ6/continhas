import { styled } from '@styles/stitches.config';

export namespace DatePickerWeeksHeaderStyles {
  export const Header = styled('header', {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '$small',
  });

  export const Day = styled('strong', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '$medium',

    fontSize: '$small',
    lineHeight: '$large',
    fontWeight: '500',
    color: '$defaultTextLoContrastColor',
  });
}
