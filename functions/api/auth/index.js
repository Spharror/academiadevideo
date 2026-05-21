export async function onRequest(context) {
  const { env } = context;
  const url = new URL(context.request.url);
  const provider = url.searchParams.get('provider');

  if (provider === 'github') {
    const state = Math.random().toString(36).substring(7);
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&scope=repo,user&state=${state}`;
    return Response.redirect(githubAuthUrl, 302);
  }

  return new Response('Not found', { status: 404 });
}
