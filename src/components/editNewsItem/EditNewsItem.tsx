import { Modal } from '../modal'
import { useState } from 'react'
import { Button } from '../button'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { useAppDispatch } from '../../services/store.ts'
import { newsActions } from '../../features/newsPage/model/newsSlice.ts'
import { AddOrEditNewsItemForm, FormValues } from '../forms/addOrEditNewsItemForm'
type Props = {
  newsTitle: string
  id: string
  newsContent: string
}

export const EditNewsItem = ({ newsTitle, newsContent, id }: Props) => {
  const [open, setOpen] = useState(false)

  const dispatch = useAppDispatch()
  const onSubmit = (data: FormValues) => {
    dispatch(newsActions.editNewsItem({ title: data.titleNews, content: data.contentNews, id }))

    setOpen(false)
  }
  return (
    <>
      <Modal
        setOpen={setOpen}
        open={open}
        trigger={
          <Button variant={'edit'} title={'Изменить новость'}>
            <Pencil1Icon />
          </Button>
        }
        content={
          <AddOrEditNewsItemForm
            onSubmit={onSubmit}
            formDescription={'Измените заголовок новости или саму новость'}
            formTitle={'Редактировать новость'}
            submitButton={<Button type={'submit'}>{'Редактировать новость'}</Button>}
            newsContent={newsContent}
            newsTitle={newsTitle}
            id={id}
          />
        }
      />
    </>
  )
}
