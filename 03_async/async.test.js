const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios') // mock’аем библиотеку axios

describe('Ajax: echo', () => {
  test('should return value with promise', () => {
    Ajax.echo('some data').then((result) => {
      expect(result).toBe('some data')
    })
  })

  test('should return value with async', async () => {
    const result = await Ajax.echo('some data')
    expect(result).toBe('some data')
  })

  test('should catch error with promise', () => {
    Ajax.echo().catch((error) => {
      expect(error).toBeInstanceOf(Error)
    })
  })

  test('should catch error with async', async () => {
    try {
      await Ajax.echo()
    } catch (error) {
      expect(error.message).toBe('error echo')
    }
  })
})

describe('Ajax: GET', () => {
  let response
  let todos

  beforeEach(() => {
    todos = [
      {
        userId: 1,
        id: 13,
        title: 'Albert',
        completed: false,
      },
    ]

    response = {
      data: {
        todos,
      },
    }
  })

  test('should return data from backend', async () => {
    axios.get.mockReturnValue(response) // тк мы за'mock'али библиотеку
    // axios, она не будет делать запрос на сервер,
    // а просто вернет response
    const data = await Ajax.get()
    expect(data.todos).toEqual(todos)
  })
})
