import React from 'react';
import { render } from '@testing-library/react';
import Component from "../components/Component";

it('contains the value passed in', () => {
  const { getByText } = render(<Component value={'sai'}/>);
  expect(getByText('sai')).toBeInTheDocument();
});