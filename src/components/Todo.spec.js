import React from 'react'
import renderer from 'react-test-renderer'
import Todo from './Todo'

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
})
