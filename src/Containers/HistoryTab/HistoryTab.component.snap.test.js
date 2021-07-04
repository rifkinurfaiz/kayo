import * as React from 'react';
import { shallow } from 'enzyme';

import HistoryTabComponent from './HistoryTab.component';

jest
  .mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
  }))
  .mock('react-native-tab-view', () => ({
    SceneMap: jest.fn(),
    TabView: 'TabView',
    TabBar: 'TabBar'
  }))
  .mock('react-native-swiper', () => 'Swiper')
  .mock('./useHistoryTab', () =>
    jest.fn().mockReturnValue({
      index: 0,
      setIndex: jest.fn(),
      routes: [
        { key: 'first', title: 'Chart' },
        { key: 'second', title: 'Detail' }
      ]
    })
  );

describe('#HistoryTabComponent', () => {
  it('should render correctly', () => {
    expect(shallow(<HistoryTabComponent />)).toMatchSnapshot();
  });
});
