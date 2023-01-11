// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', () => {
    cy.request({
     method: 'POST',
     url: `https://login.microsoftonline.com/3b94b4c6-59a7-4d4f-b594-532eadaff784/oauth2/v2.0/token`,
     form: true,
     body: {
      grant_type: 'authorization_code',
      code: '0.AS8AZWdrxpS3K0qE7YRbNBwIan1Zd8AkqqdGquxYytesS0aDABY.AgABAAIAAAD--DLA3VO7QrddgJg7WevrAgDs_wQA9P83Qjxwjq56fuEmtdtjP1Zc9khh2JpHC0Y96scU4OOa2R2LrxL7GrCj0Qf6zdVsFH-dp6GEXsFwLmGeiqsY45gGvOf9DY0DBtWszi3sSKezbr-eeJtsrM77jgx2fQYrVIUm2-aYTJzJrOqv8BJh8H-ijY28I1G7YMRVczphJRuYLmq-cjYHQrDtZ0H_E1kt3lK6E_b4qE-73YKwPOMiqtWXkzRdAFeaLSKdTMCjGvKCU1asoatUveg0MIRU6XOz2bDUfWIq0P-AuVqDmMXDI4uebQ4WrOhXASFrGYvGnLd_sTArSHlEKaFzM0d1VrBwML_C9Vp4UyHgNQC9TZ9pE_dC8pWN8JzYgl7gtm1ZHslKi3THCyGAVnWrlhfkxiHARawhkyZgS_secK_Pv2SVbitGPNrir7vCAh12v-wUi7i8-aGkIdu3tpyFSwhJ-IL21jyCPo3TaTM6hA8Rz9OqySickYXaZW8RUvhH1ZPNfn_f688pRQKfymoOMxrN0S1CeNFI7sjAgRv4vLreAmbp_CW_e580LqxUL78DlGR4FWKjhPhTogK1EilLE1Gp3XNrFhPWTMALiesx1ZeLdFprgSKOUW-SjlKAZBOIW_-zb_itmAC9aIneReoGu3E9MDEIcjbFtIh8QYuK_bRYXSNHf_2S2PZtrHUz-vEcDOTWXleIlLimV0ata6SPoXT2aRNpoUW5AYJHLr-TlJbbNzqkGmsgwB2e7SGjj5trGEGEbfZBcD6PVVo7Jp_urBNT_jboeOrB5mt5_Q-x_z6JCnsE9eJbwO4FXqMlonHEmj4mz_Wq9ecJZ_Yo5bt_Qx6ejdHnHqTFwpg4xEtqyMeSL0CO17g7hRz4bzn4azNDMPDabrkuWrM',
      redirect_uri: "https://oauth.pstmn.io/v1/callback",
      client_id: 'c077597d-aa24-46a7-aaec-58cad7ac4b46',
      client_secret: 'gZB8Q~NWzTRETHya6y_FSbUGeBICjoHRdML5RaHh',
      scope: 'api://c077597d-aa24-46a7-aaec-58cad7ac4b46/User.All',
      username: '414295@student.fontys.nl',
      password: 'Hls5b=QNkN',
     },
    }).then((response) => {
     // defined in step 2
     //injectTokens(response);
    });
   });
