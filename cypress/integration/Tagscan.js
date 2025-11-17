cy.visit('https://uat-kiwistorewin2022.cex.webuy.dev/oauthservice/Account/Login?ReturnUrl=%2Foauthservice%2Fconnect%2Fauthorize%3Fclient_id%3DPTI*lMoGAMs5%2523b9jzm%255E%255EU*MCWjVbm%2525nw%26redirect_uri%3Dhttps%253A%252F%252Fuat-mepos2022.cex.webuy.dev%252Fv2%252F%2523%252Fkiwi-signin%252F%2523%26response_type%3Did_token%2520token%26scope%3Dopenid%2520customers%2520banking%2520branches%2520staffusers%2520orders%2520locks%2520print%2520notifications%2520branchprinters%2520boxes%2520oauth%2520vouchers%2520audittrails%2520documents%2520emails%2520members%2520payments%2520attributes%26state%3Dc1eaa40603bc4b018df1d0bd525ec32f%26nonce%3D32676bfc0931418dbe577ba292446fe1%26acr_values%3D2.4.35%26response_mode%3Dfragment%26prompt%3D&client_id=PTI*lMoGAMs5%23b9jzm%5E%5EU*MCWjVbm%25nw&redirect_uri=https%3A%2F%2Fuat-mepos2022.cex.webuy.dev%2Fv2%2F%23%2Fkiwi-signin%2F%23&login_hint=&post_logout_redirect_uri=&client_name=MEPoS')
cy.get('#stafftag-btn').click();
cy.get('[name="tagNumber"]').type('_130676_{enter}');
/*cy.get('#TagScanLoginPinValidate [name="PinToValidate1"]').type('1');
cy.get('#TagScanLoginPinValidate [name="PinToValidate2"]').type('2');
cy.get('#TagScanLoginPinValidate [name="PinToValidate3"]').type('1');
cy.get('#TagScanLoginPinValidate [name="PinToValidate4"]').type('2');
cy.get('#TagScanLoginPinValidate [name="PinToValidate1"]').type('2');
cy.get('#TagScanLoginPinValidate [name="PinToValidate2"]').type('1');
cy.get('#TagScanLoginPinValidate [name="PinToValidate3"]').type('2');
cy.get('#TagScanLoginPinValidate [name="PinToValidate4"]').type('1');
cy.get('#TagScanLoginPinValidate [name="PinToValidate1"]').type('0');
cy.get('#TagScanLoginPinValidate [name="PinToValidate2"]').type('4');
cy.get('#TagScanLoginPinValidate [name="PinToValidate3"]').type('0');
cy.get('#TagScanLoginPinValidate [name="PinToValidate4"]').type('7');*/