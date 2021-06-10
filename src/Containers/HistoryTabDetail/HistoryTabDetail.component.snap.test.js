import * as React from 'react';
import { shallow } from 'enzyme';

import HistoryTabDetailComponent from './HistoryTabDetail.component';

jest.mock('react-native-swiper', () => 'Swiper');

describe('#HistoryTabDetailComponent', () => {
  it('should render correctly', () => {
    expect(shallow(<HistoryTabDetailComponent />)).toMatchSnapshot();
  });
});
