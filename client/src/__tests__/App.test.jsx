import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  test('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });

  test('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<img src="/images/logo.png" alt="logo" />)).toBe(true);
  });

  test('should be selectable by class "container"', () => {
    expect(shallow(<App />).is('.container')).toBe(true);
  });

  test('should mount in a full DOM', () => {
    expect(mount(<App />).find('.container').length).toBe(1);
  });

  test('should render to static HTML', () => {
    expect(render(<App />).text()).toEqual('');
  });
});
