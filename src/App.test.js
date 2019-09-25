import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr } from '../utils';

const setUp = ( props={} ) => {
  return shallow(<App { ...props } />);
}

describe('App Component', () => {
  let component;      
  beforeEach(() => {
    component = setUp();
  });

  it('It should render without errors', () => {
    const wrapper = findByTestAttr(component, 'AppComponent');
    expect(wrapper.length).toBe(1);
  });

  it('It should render a Hangman component', () => {
    const wrapper = findByTestAttr(component, 'HangmanComponent');
    expect(wrapper.length).toBe(1);
  });
}); 