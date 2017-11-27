import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../components/Homepage';

describe('HomePage', () => {
  test('should be a stateless functional component', () => {
    expect(HomePage.prototype).not.toBeInstanceOf(React.Component);
  });

  test('should be selectable by class "homepage"', () => {
    const wrapper = shallow(<HomePage
      city=''
      search={() => {}}
      autocomplete={() => {}}
    />);

    expect(wrapper.is('.homepage')).toBe(true);
  });

  test('should call search when "Go!" is clicked', () => {
    const search = jest.fn();
    const wrapper = shallow(<Homepage search={search} select />);

    expect(search).not.toHaveBeenCalled();
    wrapper.find('#citybutton').first().simulate('click');
    expect(search).toHaveBeenCalled();
  });
});