module.exports = {
  "stories": [
    // esse cara ta falando quais arquivos ele vai procurar no nosso projeto para jogar como documentação
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ignite-lab-design-system/'
    }

    return config
  }
}