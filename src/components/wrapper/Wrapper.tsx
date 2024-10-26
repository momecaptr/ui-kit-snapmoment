import React from 'react'

import { clsx } from 'clsx'

import s from './Wrapper.module.scss'

interface WrapperProps {
  children: React.ReactNode
  className?: string
  variant?: 'box' | 'boxContent' | 'navBar' | 'withoutStyles'
}
export const Wrapper = (props: WrapperProps) => {
  const { children, className, variant = 'boxContent' } = props

  return <div className={clsx(s[variant], className)}>{children}</div>
}
