import React from 'react';
import { shallow } from 'enzyme';
import VoyageEntry from '../components/VoyageEntry';

describe('VoyageEntry', () => {
  let div = null;
  beforeEach(() => {
    div = document.createElement('div');
    div.id = 'app';
    document.body.appendChild(div);
  });

  afterEach(() => {
    div.remove();
  });


  test('should be selectable by class "voyage-entry"', () => {
    const wrapper = shallow(<VoyageEntry entry={{}} removeEntry={() => {}} />);

    expect(wrapper.is('.voyage-entry')).toBe(true);
  });

  test('should contain an "✗" button', () => {
    const wrapper = shallow(<VoyageEntry entry={{}} removeEntry={() => {}} />);

    expect(wrapper.html()).toContain('✗');
  });

  test('should call removeEntry when "✗" is clicked', () => {
    const removeEntry = jest.fn();
    const wrapper = shallow(<VoyageEntry entry={{}} removeEntry={removeEntry} />);

    // expect(count).toEqual(0);
    expect(removeEntry).not.toHaveBeenCalled();
    wrapper.find('span').first().simulate('click');
    // expect(count).toEqual(1);
    expect(removeEntry).toHaveBeenCalled();
  });
});
