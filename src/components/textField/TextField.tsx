import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'
import s from './textField.module.scss'
import { Slot } from '@radix-ui/react-slot'

type Props = {
  asChild?: boolean
  label?: string
  id?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<ElementRef<'input'>, Props>(
  ({ label, id, asChild, className, ...props }: Props, ref) => {
    const generatedId = useId()

    const Component = asChild ? Slot : 'input'
    const currentId = id ?? generatedId
    return (
      <div className={`${s.wrapper} ${className}`}>
        {label && <label htmlFor={currentId}>{label}</label>}
        <Component type="text" id={currentId} {...props} ref={ref} className={s.textfield} />
      </div>
    )
  }
)
