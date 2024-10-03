import { Modal } from '../modal'

import { useState } from 'react'
import { Button } from '../button'
import { newsActions } from '../../features/newsPage/model/newsSlice.ts'
import { useAppDispatch } from '../../services/store.ts'
import { AddOrEditNewsItemForm, FormValues } from '../forms/addOrEditNewsItemForm'

export const AddNewsItem = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  const onSubmit = (data: FormValues) => {
    dispatch(newsActions.addNewsItem({ title: data.titleNews, content: data.contentNews }))
      .unwrap()
      .then(() => {
        setOpen(false)
      })
  }
  return (
    <>
      <Modal
        onOpenChange={setOpen}
        open={open}
        trigger={<Button>Добавить Новость</Button>}
        content={
          <AddOrEditNewsItemForm
            formDescription={'Введите заголовок новости и саму новость'}
            formTitle={'Добавить новость'}
            submitButton={<Button type={'submit'}>{'Добавить новость'}</Button>}
            onSubmit={onSubmit}
          />
        }
      />
    </>
  )
}
