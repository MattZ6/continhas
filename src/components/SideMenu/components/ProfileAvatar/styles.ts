import NextImage from 'next/image';

import { styled } from '@styles/stitches.config';

export namespace SideMenuProfileAvatarStyles {
  export const Container = styled('div', {
    $$size: '64px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    outlineWidth: '3px',
    outlineStyle: 'solid',
    outlineColor: '$brandSolidBackground',
    outlineOffset: '4px',

    backgroundColor: '$brandElementBackground',
  });

  export const Image = styled(NextImage, {
    $$size: '64px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',
  });
}
