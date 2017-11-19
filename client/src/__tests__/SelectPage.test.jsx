import React from 'react';
import { shallow } from 'enzyme';
import SelectPage from '../components/SelectPage';

describe('SelectPage', () => {
  test('should be selectable by id "select"', () => {
    const wrapper = shallow(<SelectPage
      photos={[{}]}
      voyage={[{}]}
      handlePhotoClick={() => {}}
      removeEntry={() => {}}
    />);

    expect(wrapper.is('#select')).toBe(true);
  });
});
