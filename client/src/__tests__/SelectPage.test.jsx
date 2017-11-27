import React from 'react';
import { shallow } from 'enzyme';
import SelectPage from '../components/SelectPage';

describe('SelectPage', () => {
  test('should be a stateless functional component', () => {
    expect(SelectPage.prototype).not.toBeInstanceOf(React.Component);
  });

  test('should be selectable by id "select"', () => {
    const wrapper = shallow(<SelectPage
      photos={[{}]}
      voyage={[{}]}
      handlePhotoClick={() => {}}
      removeEntry={() => {}}
      saveVoyage={() => {}}
      book={() => {}}
    />);

    expect(wrapper.is('#select')).toBe(true);
  });
});
