import todos from './index'

describe('todos reducer', () => {
  it('ignores unknown actions', () => {
    const unknownAction = { type: undefined }
    const initialState = []
    expect(todos(initialState, unknownAction)).toBe(initialState)
  })

  it('creates a new todo on ADD_TODO actions', () => {
    const action = { type: 'ADD_TODO', id: 42, text: 'whatever' }
    const initialState = [
      { id: 1, text: 'foo', completed: true }
    ]
    expect(todos(initialState, action)).toEqual([
      { id: 1, text: 'foo', completed: true },
      { id: 42, text: 'whatever', completed: false }
    ])
  })
})
