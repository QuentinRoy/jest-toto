import React from 'react'
import renderer from 'react-test-renderer'
import Todo from './Todo'
import { shallow } from 'enzyme'

describe('<Todo />', () => {
  it('renders correctly when not completed', () => {
    const tree = renderer.create(
      <Todo
        completed={false}
        text="foo"
        onClick={()=>{}}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly when completed', () => {
    const tree = renderer.create(
      <Todo
        completed
        text="bar"
        onClick={()=>{}}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('calls onClick when clicked', () => {
    // Create a mock function for the onClick handler.
    const onClick = jest.fn()
    const wrapper = shallow(
      <Todo
        completed
        text="foo"
        onClick={onClick}
      />
    ).simulate('click', 'click args')
    expect(onClick.mock.calls).toEqual([
      ['click args']
    ])
  })
})
