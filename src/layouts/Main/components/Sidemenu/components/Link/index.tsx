import { Icon } from 'phosphor-react'
import { NavLinkProps } from 'react-router-dom'

import { LinkStyles as Styles } from './styles'

type Props = {
  name: string
  icon: Icon
} & NavLinkProps

export function Link({ name, icon: Icon, ...rest }: Props) {
  return (
    <Styles.Link {...rest}>
      <Icon size={24} />
      <Styles.Label>{name}</Styles.Label>
    </Styles.Link>
  )
}
