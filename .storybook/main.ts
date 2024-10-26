import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  viteFinal: async (config) => {
    // Здесь добавляем alias для Vite
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../src'), // Добавляем alias для папки src
    };
    return config;
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
};
export default config;
