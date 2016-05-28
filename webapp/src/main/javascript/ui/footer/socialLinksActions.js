import namespacedActions from 'redux-namespaced-actions';
const { createAction } = namespacedActions('SocialLinks');

/**
 * Redux action to load the social links
 */
export const loadSocialLinks = createAction('LOAD_SOCIAL_LINKS', () => new Promise((resolve, reject) => {
        resolve({
            'facebook' : 'http://www.facebook.com',
            'twitter' : 'http://www.twitter.com',
            'google' : 'http://plus.google.com'
        });
    })
);
