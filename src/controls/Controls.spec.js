// Test away!
import React from 'react';
import Controls from './Controls';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('<Controls />', () => {
  it('looks great', () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot()
  })
  it('locks', () => {
    const mock = jest.fn();

    const { getByText } = render(<Controls toggleLocked={mock}/>)

    const button = getByText(/unlock gate/i);
  })
})
