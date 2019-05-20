const domain = 'https://localhost:44325';
//const domain = 'http://corewebapp.com';
const baseUrl = `${domain}/api`;

export const environment = {
  production: true,
  domain: domain,
  baseUrl: baseUrl,
  refreshTokenUrl: `${baseUrl}/account/refresh-token`
};