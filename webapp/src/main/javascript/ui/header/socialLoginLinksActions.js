import namespacedActions from 'redux-namespaced-actions';
const { createAction } = namespacedActions('SocialLoginLinks');

/**
 * Redux action to load the social login links
 */
export const loadSocialLoginLinks = createAction('LOAD_PROVIDERS', () => fetch('/api/authentication/external')
    .then((response) => response.json())
);
