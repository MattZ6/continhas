import { ProfileLinkStyles as Styles } from './styles'

export function ProfileLink() {
  return (
    <Styles.Link to="/profile">
      <Styles.Avatar />

      <Styles.Content>
        <Styles.Name>Tom Morello</Styles.Name>
        <Styles.Message>Clique para ver seu perfil</Styles.Message>
      </Styles.Content>
    </Styles.Link>
  )
}
