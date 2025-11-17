const { defineConfig } = require('cypress');
 
    module.exports = defineConfig({
      e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
      
      require('cypress-mochawesome-reporter/plugin')(on)
        
        },
        defaultCommandTimeout: 7000,
        pageLoadTimeout: 90000,
        specPattern: 'cypress/integration/*.js',
      },
      env: {
        baseUrl : "https://uat-mepos2022.cex.webuy.dev",
        KiwiUrl: 'https://uat-kiwistorewin2022.cex.webuy.dev',
        RedirectedUrl: 'https://uat-kiwistorewin2022.cex.webuy.dev/oauthservice/Account/Login?ReturnUrl=%2Foauthservice%2Fconnect%2Fauthorize%3Fclient_id%3DPTI*lMoGAMs5%2523b9jzm%255E%255EU*MCWjVbm%2525nw%26redirect_uri%3Dhttps%253A%252F%252Fuat-mepos2022.cex.webuy.dev%252Fv2%252F%2523%252Fkiwi-signin%252F%2523%26response_type%3Did_token%2520token%26scope%3Dopenid%2520customers%2520banking%2520branches%2520staffusers%2520orders%2520locks%2520print%2520notifications%2520branchprinters%2520boxes%2520oauth%2520vouchers%2520audittrails%2520documents%2520emails%2520members%2520payments%2520attributes%26state%3D22f395bf5f76449c8d29e82e4354f787%26nonce%3D5b225c15bd2c424196eb6bedc362c34d%26acr_values%3D2.4.33%26response_mode%3Dfragment%26prompt%3D&client_id=PTI*lMoGAMs5%23b9jzm%5E%5EU*MCWjVbm%25nw&redirect_uri=https%3A%2F%2Fuat-mepos2022.cex.webuy.dev%2Fv2%2F%23%2Fkiwi-signin%2F%23&login_hint=&post_logout_redirect_uri=&client_name=MEPoS',
  
      },
      
      reporter: 'cypress-mochawesome-reporter',
    });