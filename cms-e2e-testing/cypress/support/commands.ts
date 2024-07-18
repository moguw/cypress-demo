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

declare namespace Cypress {
    interface Chainable<Subject> {
      staffLogin(email: string, password: string): void;
      getUserAuth();
      logout(): void;
      setEnvCookie();
      setAuthorization();
      setMultiroleToken();
      // loadData(models: string[]): void;
      checkLocation(path: string): void;
      getUnduplicatedString(name?:string);
    }
  }
  
  const API_URL = Cypress.env("api");
  
  Cypress.Commands.add("staffLogin", (email, password) => {
    const staffLoginMutation = `mutation cmsUserLogin {
      cmsUserLogin(
        input: {
          email: "${email}",
          password: "${password}" })  {
              authToken
      }
  }`;
    cy.request("POST", Cypress.env("api"), {
      query: staffLoginMutation,
    }).then((response) => {
      const cmsToken = response.body.data.cmsUserLogin.authToken;
      expect(cmsToken).to.exist;
      cy.setCookie(Cypress.env('branch'), Cypress.env('enviro'));
      cy.setCookie(Cypress.env('authKey'), cmsToken);
    });
  });

  Cypress.Commands.add("getUserAuth", () => {
    let cookies=null;
    const GetUserAuthMutation = `query CMS_GetUserAuth {
      identity {
        id
        identity {
          frontendScopes {
            role
            scopes {
              object
              permission
            }
          }
        }
      }
    }`;
    cy.getCookie(Cypress.env('authKey')).then((c)=>{
      cookies='Bearer '+c.value;
      cy.request({
        method:'POST', 
        url:API_URL,
        headers:{'Authorization':cookies},
        body:{
        query: GetUserAuthMutation,
      }}).then((response) => {
        let scopess={}
        let scopes=response.body.data.identity.identity.frontendScopes[0].scopes
        scopes.forEach(element => {
          scopess[element.object]=element.permission;
        });
        let json = {
          "authToken":c.value,
          "payload":{
            "authMapping":scopess,
            "currentRoleSlug":"admin"
          }
        }
        window.localStorage.setItem(Cypress.env('currentRoleKey'), JSON.stringify(json));
      });
    });
    
  });
  
  Cypress.Commands.add("logout", () => {
    localStorage.setItem("token", "");
  });
  
  Cypress.Commands.add("checkLocation", (route) => {
    cy.location("pathname", { timeout: 10000 }).should("contains", route);
  });
  
  Cypress.Commands.add("setEnvCookie", () => {
    cy.setCookie(Cypress.env('branch'), Cypress.env('enviro'));
  });

  Cypress.Commands.add("setAuthorization", () => {
    cy.staffLogin(Cypress.env('adminEmail'), Cypress.env('adminPsw'));
    cy.visit('/').get('.property-list').should('exist');
  });

  Cypress.Commands.add("setMultiroleToken", () => {
    cy.staffLogin(Cypress.env('multiroleEmail'), Cypress.env('multirolePsw'));
    cy.getUserAuth();
    cy.visit('/').get('.property-list').should('exist');
  });

  Cypress.Commands.add("getUnduplicatedString",(name) =>{
    let radom = new Date().getTime().toString();
    name?cy.wrap(name.concat("+",radom)):cy.wrap(Cypress.env("adminEmail").replace("cms",radom));
  });
