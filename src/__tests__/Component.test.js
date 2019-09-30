import React from 'react';
import renderer from 'react-test-renderer';
import Component from "../components/Component";
import {shallow} from "enzyme";

test('Component displays values', () => {
  const c = renderer.create(<Component value={'ram'}/> );

  expect(c).toMatchSnapshot();
});

test('Component displays values when shallow rendered', () => {
  shallow(<Component value={'sai'}/> );
});
