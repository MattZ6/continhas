import { NavLink } from 'react-router-dom'

import { styled } from '@styles/stitches.config'

export namespace ProfileLinkStyles {
  export const Link = styled(NavLink, {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    padding: '$small',
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

  export const Avatar = styled('div', {
    flexShrink: 0,

    $$size: '40px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    backgroundColor: '$defaultElementBackground',
  })

  export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    overflow: 'hidden',
  })

  export const Name = styled('strong', {
    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '$medium',

    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  })

  export const Message = styled('span', {
    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: '$regular',
    color: '$defaultTextLoContrast',

    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  })
}
