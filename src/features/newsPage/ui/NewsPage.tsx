import s from './newsPage.module.scss'
import { NewsItem } from '../../../components/newsItem/NewsItem.tsx'
import { AddNewsItem } from '../../../components/addNewsItem'
import { useNews } from '../lib/useNews.ts'

export const NewsPage = () => {
  const { news } = useNews()
  return (
    <div className={s.container}>
      <div className={s.newsBlock}>
        {news?.map(n => <NewsItem heading={n.title} content={n.content} key={n.id} id={n.id} />)}
      </div>
      <AddNewsItem />
    </div>
  )
}
