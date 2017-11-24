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

  test('should be a stateless functional component', () => {
    expect(PhotoPanel.prototype).not.toBeInstanceOf(React.Component);
  });

  test('should be selectable by id "photo-panel"', () => {
    const wrapper = shallow(<PhotoPanel photos={[{ id: 1 }]} handlePhotoClick={() => {}} />);

    expect(wrapper.is('#photo-panel')).toBe(true);
  });

  test('should call handlePhotoClick when image is clicked', () => {
    const testClick = jest.fn();
    const wrapper = shallow(<PhotoPanel photos={[{ id: 1 }]} handlePhotoClick={testClick} />);

    expect(testClick).not.toHaveBeenCalled();
    wrapper.find('li').first().simulate('click');
    expect(testClick).toHaveBeenCalled();
  });

  test('should render images to the panel', () => {
    const wrapper = shallow(<PhotoPanel
      photos={sampleData.businesses}
      handlePhotoClick={() => {}}
    />);

    expect(wrapper.find('img')).toHaveLength(20);
  });
});
