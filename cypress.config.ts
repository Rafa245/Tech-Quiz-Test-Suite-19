import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite", // Use Vite as the bundler
    },
    specPattern: "cypress/component/**/*.cy.{ts,tsx}", // Pattern for component test files
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Your node event listeners for E2E tests
    },
    baseUrl: 'http://localhost:3001', // Ensure your app runs here
  },
});
