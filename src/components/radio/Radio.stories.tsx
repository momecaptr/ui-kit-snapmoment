import { Controller, useForm } from 'react-hook-form'

import { Radio } from './Radio'

const meta = {
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/Radio'
}
interface FormData {
  grade: string // Указываем точный тип поля
}

export default meta

export const Default = () => {
  return (
    <Radio.Root name={'common'}>
      <Radio.Item value={'1 radio'}>1 radio</Radio.Item>
    </Radio.Root>
  )
}
export const DefaultGroup = () => {
  return (
    <Radio.Root name={'grade'}>
      <Radio.Item value={'1 radio'}>1 radio</Radio.Item>
      <Radio.Item value={'2 radio'}>2 radio</Radio.Item>
      <Radio.Item value={'3 radio'}>3 radio</Radio.Item>
      <Radio.Item value={'4 radio'}>4 radio</Radio.Item>
      <Radio.Item value={'5 radio'}>5 radio</Radio.Item>
    </Radio.Root>
  )
}

export const Disabled = () => {
  return (
    <Radio.Root name={'disabled'}>
      <Radio.Item value={'1 radio'} disabled>
        1 radio
      </Radio.Item>
    </Radio.Root>
  )
}

export const Controlled = () => {
  const { control } = useForm<FormData>() // Передаем тип данных формы

  return (
    <div>
      <form>
        <Controller
          render={({ field }) => (
            <Radio.Root
              onValueChange={(value: string) => {
                field.onChange(value)
              }}
              name={field.name}
              value={field.value}
            >
              <Radio.Item value={'1 radio'}>1 radio</Radio.Item>
              <Radio.Item value={'2 radio'}>2 radio</Radio.Item>
              <Radio.Item value={'3 radio'}>3 radio</Radio.Item>
              <Radio.Item value={'4 radio'}>4 radio</Radio.Item>
              <Radio.Item value={'5 radio'}>5 radio</Radio.Item>
            </Radio.Root>
          )}
          control={control}
          name={'grade'}
        />
      </form>
    </div>
  )
}
