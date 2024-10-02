import { v4 as uuidv4 } from 'uuid'
import { newsActions, NewsItem, newsSlice } from '../newsSlice'

let initialState: NewsItem[]

describe('news slice CRUD tests', () => {
  beforeEach(() => {
    initialState = [
      {
        id: uuidv4(),
        title: 'Some news',
        content: 'Some content',
      },
    ]
  })

  it('should add a news item', () => {
    type AddNewsItemActionType = Omit<ReturnType<typeof newsActions.addNewsItem>, 'meta'>

    const action: AddNewsItemActionType = {
      type: newsActions.addNewsItem.type,
      payload: { content: 'Test content', title: 'Test title' },
    }

    const newState = newsSlice(initialState, action)

    expect(newState.length).toBe(initialState.length + 1)
    expect(newState[newState.length - 1].content).toBe('Test content')
  })

  it('should delete a news item', () => {
    type DeleteNewsItemActionType = Omit<ReturnType<typeof newsActions.deleteNewsItem>, 'meta'>

    const action: DeleteNewsItemActionType = {
      type: newsActions.deleteNewsItem.type,
      payload: { id: initialState[0].id },
    }

    const newState = newsSlice(initialState, action)
    expect(newState.length).toBe(0)
  })

  it('should fetch news items', () => {
    const newsItems = [
      { id: '1', content: 'Test content 1', title: 'Test title 1' },
      { id: '2', content: 'Test content 2', title: 'Test title 2' },
    ]

    type FetchNewsActionType = Omit<ReturnType<typeof newsActions.fetchNews>, 'meta'>

    const action: FetchNewsActionType = {
      type: newsActions.fetchNews.type,
      payload: newsItems,
    }

    const newState = newsSlice(initialState, action)
    expect(newState).toEqual(newsItems)
  })

  it('should edit a news item title', () => {
    type EditNewsItemActionType = Omit<ReturnType<typeof newsActions.editNewsItem>, 'meta'>

    const action: EditNewsItemActionType = {
      type: newsActions.editNewsItem.type,
      payload: { id: initialState[0].id, title: 'New title' },
    }

    const newState = newsSlice(initialState, action)

    expect(newState[0].title).toBe('New title')
    expect(newState[0].content).toBe('Some content')
  })

  it('should edit a news item content', () => {
    type EditNewsItemActionType = Omit<ReturnType<typeof newsActions.editNewsItem>, 'meta'>

    const action: EditNewsItemActionType = {
      type: newsActions.editNewsItem.type,
      payload: { id: initialState[0].id, content: 'New content' },
    }

    const newState = newsSlice(initialState, action)

    expect(newState[0].content).toBe('New content')
    expect(newState[0].title).toBe('Some news')
  })
})
