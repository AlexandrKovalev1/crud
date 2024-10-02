import s from './newsItem.module.scss'
import { Button } from '../button'
import { TrashIcon } from '@radix-ui/react-icons'
import { EditNewsItem } from '../editNewsItem'
import { useAppDispatch } from '../../services/store.ts'
import { newsActions } from '../../features/newsPage/model/newsSlice.ts'

type Props = {
  heading?: string
  content?: string
  id: string
}
export const NewsItem = ({ heading = 'Без заголовка', content = '', id }: Props) => {
  const dispatch = useAppDispatch()

  const onDeleteClickHandler = () => {
    dispatch(newsActions.deleteNewsItem(id))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.contentBlock}>
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
      <div className={s.buttonsBlock}>
        <Button
          variant={'delete'}
          className={s.trash}
          title={'Удалить новость'}
          onClick={onDeleteClickHandler}
        >
          <TrashIcon />
        </Button>
        <EditNewsItem newsTitle={heading} newsContent={content} id={id} />
      </div>
    </div>
  )
}
