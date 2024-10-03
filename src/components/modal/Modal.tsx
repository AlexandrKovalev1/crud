import * as Dialog from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './modal.module.scss'

type Props = {
  trigger?: ReactNode
  content?: ReactNode
} & ComponentPropsWithoutRef<typeof Dialog.Root>
export const Modal = ({ trigger, content, ...props }: Props) => {
  return (
    <Dialog.Root {...props}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.content}>{content}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
