import { NavLink } from 'react-router-dom'

import { styled } from '@styles/stitches.config'

export namespace LinkStyles {
  export const Link = styled(NavLink, {
    flexShrink: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '$normal',

    height: '44px',
    padding: '0 $small',

    borderRadius: '$small',

    color: '$defaultTextHiContrast',
    textDecoration: 'none',

    outline: '2px solid transparent',

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementBackgroundHover',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
    },

    '&[aria-current="page"]': {
      color: '$brandSolid',

      '&:not(:disabled):hover': {
        backgroundColor: '$brandElementBackgroundHover',
        color: '$brandSolidHover',
      },

      '&:focus-visible': {
        outlineColor: '$brandElementBorder',
      },
    },
  })

  export const Label = styled('span', {
    flex: 1,

    fontSize: '$default',
    lineHeight: '$default',
    fontWeight: '$medium',

    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  })
}
