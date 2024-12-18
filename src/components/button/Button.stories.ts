import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outlined', 'text']
    }
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button'
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary',
    disabled: false,
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    disabled: false,
    variant: 'secondary'
  }
}

export const Outlined: Story = {
  args: {
    children: 'Outlined',
    disabled: false,
    variant: 'outlined'
  }
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary'
  }
}
export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary'
  }
}
