import namespacedActions from 'redux-namespaced-actions';
const { createAction } = namespacedActions('SocialLinks');

/**
 * Redux action to load the social links
 */
export const loadSocialLinks = createAction('LOAD_SOCIAL_LINKS', () => fetch('/api/social')
    .then((response) => response.json())
);
