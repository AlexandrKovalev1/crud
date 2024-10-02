import s from './newsPage.module.scss'
import { Button } from '../../../components/button'

export const NewsPage = () => {
  return (
    <div className={s.container}>
      <div></div>
      <Button>Добавить новость</Button>
    </div>
  )
}
