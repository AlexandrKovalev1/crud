import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import s from './modal.module.scss'

type Props = {
  trigger?: ReactNode
  content?: ReactNode
  open?: boolean
  setOpen: (isOpen: boolean) => void
}
export const Modal = ({ trigger, open, setOpen, content }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.content}>{content}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
