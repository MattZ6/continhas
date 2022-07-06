import { useAuth } from '@hooks/useAuth';

import { SideMenuProfileAvatarStyles as Styles } from './styles';

export function SideMenuProfileAvatar() {
  const { profile } = useAuth();

  return (
    <Styles.Container>
      {profile?.avatar_url && (
        <Styles.Image
          src={{
            src: profile.avatar_url,
            width: 80,
            height: 80,
          }}
          alt=""
        />
      )}
    </Styles.Container>
  );
}
