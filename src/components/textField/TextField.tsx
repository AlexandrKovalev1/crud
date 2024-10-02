import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'
import s from './textField.module.scss'

type Props = ComponentPropsWithoutRef<'input'> & {
  label?: string
  id?: string
}
export const TextField = forwardRef<ElementRef<'input'>, Props>(
  ({ label, id, ...props }: Props, ref) => {
    const generatedId = useId()

    const currentId = id ?? generatedId
    return (
      <div className={s.wrapper}>
        {label && <label htmlFor={currentId}>{label}</label>}
        <input type="text" id={currentId} {...props} ref={ref} />
      </div>
    )
  }
)
