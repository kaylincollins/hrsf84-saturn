import React from 'react';
import { shallow } from 'enzyme';
import VoyageView from '../components/VoyageView';

describe('VoyageView', () => {
  test('should be selectable by id "voyage-view"', () => {
    const wrapper = shallow(<VoyageView voyage={[{}]} removeEntry={() => {}} />);

    expect(wrapper.is('#voyage-view')).toBe(true);
  });

  test('should contain a save button if select is true', () => {
    const wrapper = shallow(<VoyageView voyage={[{}]} removeEntry={() => {}} select />);

    expect(wrapper.text()).toContain('Save Voyage');
  });

  test('should not contain a save button if select is not specified', () => {
    const wrapper = shallow(<VoyageView voyage={[{}]} removeEntry={() => {}} />);

    expect(wrapper.text()).not.toContain('Save Voyage');
  });
});
