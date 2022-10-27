import { themes } from '@storybook/theming';

// importando o tailwind aqui para que o storybook conheça as nossas estilizações
import '../src/styles/global.css'

import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
// essa prop faz com que os logs de requisições que a gente não tratou não apareçam
initialize({
  onUnhandledRequest: 'bypass'
});

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  }
}