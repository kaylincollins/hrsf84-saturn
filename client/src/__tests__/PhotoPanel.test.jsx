import React from 'react';
import { shallow } from 'enzyme';
import PhotoPanel from '../components/PhotoPanel';

import sampleData from '../../../sampleData/yelpData';

describe('PhotoPanel', () => {
  let div = null;
  beforeEach(() => {
    div = document.createElement('div');
    div.id = 'app';
    document.body.appendChild(div);
  });

  afterEach(() => {
    div.remove();
  });

  test('should be selectable by id "photo-panel"', () => {
    const wrapper = shallow(<PhotoPanel photos={[{}]} handlePhotoClick={() => {}} />);

    expect(wrapper.is('#photo-panel')).toBe(true);
  });

  test('should call handlePhotoClick when image is clicked', () => {
    const handlePhotoClick = jest.fn();
    const wrapper = shallow(<PhotoPanel photos={[{}]} handlePhotoClick={handlePhotoClick} />);

    expect(handlePhotoClick).not.toHaveBeenCalled();
    wrapper.find('li').first().simulate('click');
    expect(handlePhotoClick).toHaveBeenCalled();
  });

  test('should render images to the panel', () => {
    const wrapper = shallow(<PhotoPanel
      photos={sampleData.businesses}
      handlePhotoClick={() => {}}
    />);

    expect(wrapper.find('img')).toHaveLength(20);
  });
});
