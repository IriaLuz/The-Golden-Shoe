import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Button from './../button-example';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup); 
it('render without crasing', ()=>{
    const div = document.createElement("div")
    ReactDOM.render (<Button></Button>, div)
})

it('renders button correctly', ()=>{
    const {getByTestId} = render(<Button label='click me please'></Button>)
    expect(getByTestId('button')).toHaveTextContent('click me please')
})

it('renders button correctly', ()=>{
    const {getByTestId} = render(<Button label='save'></Button>)
    expect(getByTestId('button')).toHaveTextContent('save')
})

it ('matches snapshot 1', ()=>{
    const tree = renderer.create(<Button label='save'></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

it ('matches snapshot 2', ()=>{
    const tree = renderer.create(<Button label='Click me please'></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})