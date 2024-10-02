import { ComponentPropsWithoutRef } from 'react'
import s from './button.module.scss'

type Props = ComponentPropsWithoutRef<'button'> & { variant?: 'add' | 'edit' | 'delete' }
export const Button = ({ variant = 'add', className, ...props }: Props) => {
  const finalClassName = `${s.button} ${s[variant]} ${className}`

  return <button className={finalClassName} {...props} />
}
