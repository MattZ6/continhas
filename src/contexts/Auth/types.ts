export namespace AuthContextData {
  export type Profile = {
    name: string;
    first_name: string;
    avatar_url: string;
  };

  export type Authentication = {
    access_token: string;
    refresh_token: string;
  };

  export type GoogleSignInData = {
    code: string;
  };

  export type Context = {
    isSigning: boolean;
    signInWithGoogle: (data: GoogleSignInData) => Promise<void>;
    signOut: () => void;
    profile?: Profile;
  };

  export type Payload = {
    authentication: Authentication;
    profile: Profile;
  };
}
