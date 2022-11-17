import { styled } from '@styles/stitches.config'

export namespace SettingsPageStyles {
  export const Container = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$large',

    padding: '$large',
  })

  export const Title = styled('h1', {
    fontFamily: '$headlines',
    fontSize: '$large',
    lineHeight: '$large',
    fontWeight: '$bold',
  })

  export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$large',
  })

  export const Block = styled('div', {
    display: 'flex',
    flexDirection: 'column',
  })

  export const Subtitle = styled('h3', {
    fontFamily: '$texts',
    fontSize: '$default',
    lineHeight: '$default',
    fontWeight: '$bold',
  })

  export const Message = styled('p', {
    fontFamily: '$texts',
    fontSize: '$default',
    lineHeight: '$default',
    fontWeight: '$regular',
    color: '$defaultTextLoContrast',
  })
}
