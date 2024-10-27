import type { Preview } from '@storybook/react';
import '@/core/styles/global.scss'
import { themes } from '@storybook/theming';
const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000'
        },
        {
          name: 'white',
          value: '#ffffff'
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;