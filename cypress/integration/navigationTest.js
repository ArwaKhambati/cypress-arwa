// cypress/integration/navigationTest.spec.js

import NavigationPage from '../support/pages/NavigationPage';

describe('URL Redirection Test', () => {
    const navPage = new NavigationPage();

    it('should redirect to the login page', () => {
        navPage.visitInitialUrl();
        navPage.assertRedirectedUrl();
    });
});
