import React from 'react';
import { shallow } from 'enzyme';
import JournalPage from '../components/JournalPage';

describe('JournalPage', () => {
  test('should be a stateless functional component', () => {
    expect(JournalPage.prototype).not.toBeInstanceOf(React.Component);
  });

  test('should be selectable by id "journal"', () => {
    const wrapper = shallow(<JournalPage
      voyages={[{}]}
      voyage={[{}]}
      handleVoyageClick={() => {}}
      removeEntry={() => {}}
      saveVoyage={() => {}}
    />);

    expect(wrapper.is('#journal')).toBe(true);
  });
});