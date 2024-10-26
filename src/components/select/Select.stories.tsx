import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { SelectOptionsType, SelectUI } from './Select'

const meta: Meta<typeof SelectUI> = {
  component: SelectUI,
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs'],
  title: 'Components/SelectUI'
} satisfies Meta<typeof SelectUI>

export default meta
type Story = StoryObj<typeof meta>

// Правильная типизация аргументов
interface TemplateArgs {
  value?: string
  selectOptions: SelectOptionsType[]
}

const Template = (args: TemplateArgs) => {
  const [value, setValue] = useState<string>(args.value ?? '') // Указываем тип для value

  return (
    <SelectUI
      {...args}
      onValueChange={(newValue: string) => {
        setValue(newValue)
      }}
      value={value}
    />
  )
}

export const Default: Story = {
  args: {
    selectOptions: [
      { text: 'Apple', value: 'apple' },
      { text: 'Banana', value: 'banana' },
      { text: 'Smetana', value: 'smetana' },
      { text: 'Nirvana', value: 'nirvana' }
    ],
    value: 'apple'
  },
  render: (args) => <Template {...args} />
}
