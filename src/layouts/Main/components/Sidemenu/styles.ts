import { styled } from '@styles/stitches.config'

export namespace SidemenuStyles {
  export const Container = styled('aside', {
    display: 'flex',
    flexDirection: 'column',

    width: '260px',

    backgroundColor: '$defaultSubtleBackground',
  })

  export const Footer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
  })

  export const FooterNavigation = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    padding: '$normal',
  })

  export const ProfileContainer = styled('div', {
    padding: '$normal',

    borderTop: '1px solid $defaultSubtleBorder',
  })
}
