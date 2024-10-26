import React from 'react'

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import s from './Chart.module.scss'

export interface ChartData {
  [key: string]: number | string
  name: string
}

interface ChartProps<T extends ChartData> {
  data: T[]
  dataKeys: Record<string, string>
}

export const Chart = <T extends ChartData>({ data, dataKeys }: ChartProps<T>) => {
  return (
    <div className={s.chart}>
      <ResponsiveContainer height={400} width={'100%'}>
        <LineChart data={data}>
          <XAxis dataKey={'name'} />
          <YAxis />
          <Tooltip />
          {Object.keys(dataKeys).map((key) => (
            <Line dataKey={key} key={key} stroke={dataKeys[key]} type={'monotone'} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}