type GetGoogleSignInURLData = {
  redirect_uri: string;
};

type Params = {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  access_type: string;
  prompt: string;
};

export function getGoogleSignInURL({ redirect_uri }: GetGoogleSignInURLData) {
  const params: Params = {
    client_id: String(process.env.GOOGLE_CLIENT_ID),
    redirect_uri,
    response_type: 'code',
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
    access_type: 'offline',
    prompt: 'consent',
  };

  const stringifiedParams = Object.keys(params)
    .map(key => `${key}=${params[key as keyof Params]}`)
    .join('&');

  return `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
}
