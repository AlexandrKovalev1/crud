import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './button.module.scss'

type Props = ComponentPropsWithoutRef<'button'> & { variant?: 'add' | 'edit' | 'delete' }
export const Button = forwardRef<ElementRef<'button'>, Props>(
  ({ variant = 'add', className, ...props }: Props, ref) => {
    const finalClassName = `${s.button} ${s[variant]} ${className}`

    return <button className={finalClassName} {...props} ref={ref} />
  }
)
Button.displayName = 'Button'
