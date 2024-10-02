import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { TextField } from '../../textField'
import { Button } from '../../button'
import s from './addOrEditNewsItemForm.module.scss'
import { useForm } from 'react-hook-form'
import { ElementRef, forwardRef, ReactNode } from 'react'

type Props = {
  formTitle?: string
  formDescription?: string
  submitButton?: ReactNode
  newsTitle?: string
  id?: string
  newsContent?: string
  onSubmit: (data: FormValues) => void
}

export type FormValues = {
  titleNews: string
  contentNews: string
}
export const AddOrEditNewsItemForm = forwardRef<ElementRef<'form'>, Props>(
  ({ formTitle, formDescription, newsContent, newsTitle, submitButton, onSubmit }: Props, ref) => {
    const { register, handleSubmit } = useForm<FormValues>()

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Dialog.Title>{formTitle}</Dialog.Title>
        <Dialog.Description>{formDescription}</Dialog.Description>
        <fieldset className={s.fieldset}>
          <TextField
            label={'Заголовок'}
            defaultValue={newsTitle ?? ''}
            {...register('titleNews')}
            placeholder={'Введите заголовок'}
            required
          />
        </fieldset>
        <fieldset className={s.fieldset}>
          <TextField
            label={'Текст новости'}
            defaultValue={newsContent ?? ''}
            {...register('contentNews')}
            placeholder={'Напишите новость'}
          />
        </fieldset>
        <div className={s.submitWrapper}>{submitButton}</div>
        <Dialog.Close asChild>
          <Button className={s.buttonClose} aria-label="Close" variant={'delete'} type={'button'}>
            <Cross2Icon />
          </Button>
        </Dialog.Close>
      </form>
    )
  }
)
