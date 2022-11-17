import { styled } from '@styles/stitches.config'

export namespace LoginPageStyles {
  export const Wrapper = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    height: '100vh',

    padding: '24px',
  })

  export const Card = styled('div', {
    width: '560px',
    height: '400px',
    borderRadius: '$small',

    backgroundColor: '$defaultElementBackground',
  })
}
