import { styled } from '@styles/stitches.config'

export namespace MainLayoutStyles {
  export const Container = styled('div', {
    display: 'flex',

    height: '100vh',
  })

  export const Main = styled('main', {
    flex: 1,
  })
}
