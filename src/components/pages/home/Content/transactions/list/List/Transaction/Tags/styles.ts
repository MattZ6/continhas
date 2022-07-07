import { styled } from '@styles/stitches.config';

export namespace TagsStyles {
  export const Container = styled('div', {
    display: 'flex',
    gap: '$small',
  });

  export const Tag = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$small',

    paddingRight: '$normal',
    paddingLeft: '$small',

    fontSize: '$small',
    lineHeight: '$small',
    textAlign: 'center',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '24px',
  });

  export const TagDot = styled('div', {
    $$size: '5px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',
  });
}
