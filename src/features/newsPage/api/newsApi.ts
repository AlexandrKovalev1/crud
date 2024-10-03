import { EditNewsItem, NewsItem } from '../model/newsSlice.ts'
import { loadNews } from '../../../utils/lockaStorage/lockaStorage.ts'

const initNews = [
  {
    id: '1',
    title: 'Some news',
    content:
      '        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nisi optio saepe ut? Ab\n' +
      '        accusamus, asperiores consectetur, consequatur, doloribus eum id inventore nostrum odit\n' +
      '        provident qui repudiandae sequi sit voluptatum.',
  },
]

const persistedNews = loadNews()

export const newsApi = {
  fetchNews: () => {
    return new Promise<NewsItem[]>(resolve => {
      setTimeout(() => {
        resolve(persistedNews || initNews)
      }, 1000)
    })
  },
  addNews: (newsItem: NewsItem) => {
    return new Promise<NewsItem>(resolve => {
      setTimeout(() => {
        resolve(newsItem)
      }, 1000)
    })
  },
  editNews: (data: EditNewsItem) => {
    return new Promise<EditNewsItem>(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  },
  deleteNews: (id: string) => {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        resolve(id)
      }, 1000)
    })
  },
}
