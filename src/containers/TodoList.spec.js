import React from 'react'
import renderer from 'react-test-renderer'
import TodoList from './TodoList'
import configureMockStore from 'redux-mock-store'

// Mock the Todo module and replace its export by a <Todo> tag.
jest.mock('../components/Todo', () => 'Todo')
// Also mock the toggleTodo action from the actions module.
jest.mock(
  '../actions',
  () => ({ toggleTodo: jest.fn()
}));

const mockStore = configureMockStore()

describe('<TodoList />', () => {
  it('renders correctly', () => {
    // Define the initial state.
    const state = [
      { id: 1, text: 'foo', completed: false },
      { id: 2, text: 'bar', completed: true }
    ]
    // Create the store from this state.
    const store = mockStore(state)
    // Renders <TodoList> with this store.
    const tree = renderer.create(
      <TodoList
        store={store}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
