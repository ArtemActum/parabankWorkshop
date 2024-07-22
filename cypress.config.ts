import { defineConfig } from 'cypress';
import * as createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
// import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/*.{feature,ts}',
    viewportWidth: 1920,
    viewportHeight: 1080,
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      // Set up Allure plugin
      // allureWriter(on, config);

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    // reporter: 'cypress-allure-plugin',
    // reporterOptions: {
    //   allure: {
    //     resultsDir: 'allure-results',
    //   },
    // },
  },
});

