import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import Button from "../button-example";
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);
it('render without crasing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="click me please" />);
  expect(getByTestId('button')).toHaveTextContent('click me please');
});
it('matches snapshot 1', () => {
  const tree = renderer.create(<Button label="save" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot 2', () => {
  const tree = renderer
    .create(<Button label="Click me please" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
