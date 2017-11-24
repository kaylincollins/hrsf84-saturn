import React from 'react';
import { shallow } from 'enzyme';
import VoyageView from '../components/VoyageView';

describe('VoyageView', () => {
  test('should be a stateless functional component', () => {
    expect(VoyageView.prototype).not.toBeInstanceOf(React.Component);
  });

  test('should be selectable by id "voyage-view"', () => {
    const wrapper = shallow(<VoyageView voyage={[{ shortid: 1 }]} removeEntry={() => {}} />);

    expect(wrapper.is('#voyage-view')).toBe(true);
  });

  test('should contain a save button if select is true', () => {
    const wrapper = shallow(<VoyageView voyage={[{ shortid: 1 }]} removeEntry={() => {}} select />);

    expect(wrapper.text()).toContain('Save Voyage');
  });

  test('should not contain a save button if select is not specified', () => {
    const wrapper = shallow(<VoyageView voyage={[{ shortid: 1 }]} removeEntry={() => {}} />);

    expect(wrapper.text()).not.toContain('Save Voyage');
  });

  test('should call saveVoyage when save button is clicked', () => {
    const saveVoyage = jest.fn();
    const wrapper = shallow(<VoyageView
      voyage={[{ shortid: 1 }]}
      removeEntry={() => {}}
      saveVoyage={saveVoyage}
      select
    />);

    expect(saveVoyage).not.toHaveBeenCalled();
    wrapper.find('button').simulate('click');
    expect(saveVoyage).toHaveBeenCalled();
  });
});
