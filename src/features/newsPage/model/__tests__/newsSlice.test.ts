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

  it('should fetch a news ', () => {
    type FetchNewsItemActionType = Omit<ReturnType<typeof newsActions.fetchNews.fulfilled>, 'meta'>

    const fetchedNews = [
      {
        id: uuidv4(),
        title: 'News',
        content: 'Some content news',
      },
      {
        id: uuidv4(),
        title: 'Another News',
        content: 'Another content news',
      },
    ]

    const action: FetchNewsItemActionType = {
      type: newsActions.fetchNews.fulfilled.type,
      payload: fetchedNews,
    }

    const newState = newsSlice([], action)

    expect(newState).toEqual(fetchedNews)
    expect(newState.length).toBe(2)
  })

  it('should add a news item', () => {
    type AddNewsItemActionType = Omit<ReturnType<typeof newsActions.addNewsItem.fulfilled>, 'meta'>

    const action: AddNewsItemActionType = {
      type: newsActions.addNewsItem.fulfilled.type,
      payload: { content: 'Test content', title: 'Test title', id: uuidv4() },
    }

    const newState = newsSlice(initialState, action)

    expect(newState.length).toBe(initialState.length + 1)
    expect(newState[newState.length - 1].content).toBe('Test content')
  })

  it('should delete a news item', () => {
    type DeleteNewsItemActionType = Omit<
      ReturnType<typeof newsActions.deleteNewsItem.fulfilled>,
      'meta'
    >

    const action: DeleteNewsItemActionType = {
      type: newsActions.deleteNewsItem.fulfilled.type,
      payload: initialState[0].id,
    }

    const newState = newsSlice(initialState, action)
    expect(newState.length).toBe(0)
  })

  it('should edit a news item title', () => {
    type EditNewsItemActionType = Omit<
      ReturnType<typeof newsActions.editNewsItem.fulfilled>,
      'meta'
    >

    const action: EditNewsItemActionType = {
      type: newsActions.editNewsItem.fulfilled.type,
      payload: { id: initialState[0].id, title: 'New title' },
    }

    const newState = newsSlice(initialState, action)

    expect(newState[0].title).toBe('New title')
    expect(newState[0].content).toBe('Some content')
  })

  it('should edit a news item content', () => {
    type EditNewsItemActionType = Omit<
      ReturnType<typeof newsActions.editNewsItem.fulfilled>,
      'meta'
    >

    const action: EditNewsItemActionType = {
      type: newsActions.editNewsItem.fulfilled.type,
      payload: { id: initialState[0].id, content: 'New content' },
    }

    const newState = newsSlice(initialState, action)

    expect(newState[0].content).toBe('New content')
    expect(newState[0].title).toBe('Some news')
  })
})
