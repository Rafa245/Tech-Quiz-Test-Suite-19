import React from 'react';
import { mount as cypressMount, MountOptions } from 'cypress/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import './commands';

// Augment the Cypress namespace to include type definitions for your custom command
declare global {
  namespace Cypress {
    interface Chainable {
      mount(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<void>; // Return type should be `Chainable<void>`
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options;

  // Wrap the component with MemoryRouter and pass it to Cypress mount function
  const wrappedComponent = <MemoryRouter {...routerProps}>{component}</MemoryRouter>;

  // Cypress expects `void` return type, so we return Cypress's `mount` function.
  cypressMount(wrappedComponent, mountOptions);

  // Ensure we do not return anything as Cypress expects `void` return type
});
