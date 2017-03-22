import todos from './index'

describe('todos reducer', () => {
  it('ignores unknown actions', () => {
    const unknownAction = { type: undefined }
    const initialState = []
    expect(todos(initialState, unknownAction)).toBe(initialState)
  })
})
