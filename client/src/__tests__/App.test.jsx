import React from 'react';
import { mount, render } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

describe('App', () => {
  test('should be a stateful class component', () => {
    expect(App.WrappedComponent.prototype).toBeInstanceOf(React.Component);
  });

  test('should render without throwing an error', () => {
    const wrapper = render((
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ));

    expect(wrapper.html()).toContain('<img src="/images/logo.png" alt="logo">');
  });

  test('should mount in a full DOM', () => {
    const wrapper = mount((
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ));

    expect(wrapper.find('.container').length).toBe(1);
  });

  test('should render to static HTML', () => {
    const wrapper = render((
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ));

    expect(wrapper.text()).toEqual('');
  });
});
