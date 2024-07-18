import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";


async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: 'https://spa.dandythrust.com/cms/main',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/features/*.feature',
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    setupNodeEvents,
    reporter: "junit",
    reporterOptions: {
    mochaFile: "results/test_report_[hash].xml",
    toConsole: true
    }
  },
  env: {
    api: 'https://gateway.dandythrust.com/graphql',
    authKey: 'stage_CMSACCESSSESSION',
    currentRoleKey:'stage_PMS_CURRENT_USER_AUTH',
    enviro: 'stage',
    branch: 'main',
    adminEmail: "automation.test+cms@student.com",
    adminPsw: "123123123",
    multiroleEmail:"automation.test+cms01@student.com",
    multirolePsw:"123123123"
  }
});
