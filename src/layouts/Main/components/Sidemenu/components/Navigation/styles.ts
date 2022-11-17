import { styled } from '@styles/stitches.config'

export namespace NavigationStyles {
  export const Container = styled('nav', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    overflow: 'auto',

    padding: '$normal',
    paddingBottom: 0,
  })
}
