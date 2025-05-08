export const LetterboxdApiSchema = {
  baseUrl: 'https://api.letterboxd.com/api/v0',
  Authentication: {
    info: 'https://api-docs.letterboxd.com/#auth',
    oauth2: {
      url: '/auth/token',
      Headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
    token: { Authorization: Bearer[TOKEN], expires_in: '####' },
    'Password code flow': {
      tokenURL: '/auth/token',
      refreshURL: '/auth/token',
      scopes: {
        'user:owner': 'Must be the owner of the member account. This scope cannot be requested.',
        user: 'Must be a Letterboxd member. This scope cannot be requested.',
        'profile:private:view': 'View profile information (including private information) for the member.',
        'profile:modify': 'Modify profile details for the member.',
        'security:modify': 'Modify security details for the member.',
        'content:modify': 'Modify content belonging to the member.',
        'client:firstparty': 'Must be a first-party client. This scope cannot be requested.',
        'oauth:refresh':
          'Allowed to use refresh tokens. When requesting an access token, a refresh token will be provided.',
        openid: 'Allows OIDC ID tokens to be created. OIDC will be used to verify the member’s identity.',
        profile:
          'OIDC ID tokens contain the member’s profile details, including username, display name, website link and bio content.',
        email:
          'OIDC ID tokens contain the member’s email address and an indication as to whether is has been validated.',
      },
    },
    'Authorization code flow': {
      authorizationUrl: 'https://letterboxd.com/oauth/authorize',
      tokenUrl: 'https://letterboxd.com/oauth/token',
      refreshUrl: 'https://letterboxd.com/oauth/token',
      scopes: {
        'user:owner': 'Must be the owner of the member account. This scope cannot be requested.',
        user: 'Must be a Letterboxd member. This scope cannot be requested.',
        'profile:private:view': 'View profile information (including private information) for the member.',
        'profile:modify': 'Modify profile details for the member.',
        'security:modify': 'Modify security details for the member.',
        'content:modify': 'Modify content belonging to the member.',
        'client:firstparty': 'Must be a first-party client. This scope cannot be requested.',
        'oauth:refresh':
          'Allowed to use refresh tokens. When requesting an access token, a refresh token will be provided.',
        openid: 'Allows OIDC ID tokens to be created. OIDC will be used to verify the member’s identity.',
        profile:
          'OIDC ID tokens contain the member’s profile details, including username, display name, website link and bio content.',
        email:
          'OIDC ID tokens contain the member’s email address and an indication as to whether is has been validated.',
      },
    },
    'Client credentials flow': {
      tokenUrl: 'https://letterboxd.com/oauth/token',
    },
    openid: {
      info: 'https://letterboxd.com/.well-known/openid-configuration',
      issuer: 'https://letterboxd.com',
      authorization_endpoint: 'https://letterboxd.com/api/v0/auth/authorize',
      token_endpoint: 'https://api.letterboxd.com/api/v0/auth/token',
      userinfo_endpoint: 'https://api.letterboxd.com/api/v0/userinfo',
      jwks_uri: 'https://letterboxd.com/.well-known/jwks.json',
      scopes_supported: [
        'profile:private:view',
        'profile:modify',
        'security:modify',
        'content:modify',
        'oauth:refresh',
        'openid',
        'profile',
        'email',
      ],
      response_types_supported: ['code'],
      grant_types_supported: ['authorization_code', 'password', 'client_credentials', 'refresh_token'],
      subject_types_supported: ['public'],
      id_token_signing_alg_values_supported: ['RS256'],
      token_endpoint_auth_methods_supported: ['private_key_jwt'],
      token_endpoint_auth_signing_alg_values_supported: ['RS256'],
    },
  },
  endpoints: {
    info: 'https://api-docs.letterboxd.com/#endpoints',
    syntax: {
      urlPattern: 'https://api-docs.letterboxd.com/#operation-<GET/SET/POST/etc.>-<request_category>_<request-name>',
      example: 'https://api-docs.letterboxd.com/#operation-GET-auth_get-upload-url',
      disclaimer: 'Oddly not fullproof',
    },
    Auth: {
      '/auth/get-login-token': {},
    },
    Collections: {
      info: 'https://api-docs.letterboxd.com/#operation-GET-film-collection_id',
      endpoint: '/film-collection/{id}',
    },
    Search: 'https://api-docs.letterboxd.com/#operation-GET-search',
  },
  schemas: {
    info: 'https://api-docs.letterboxd.com/#schemas',
  },
};
