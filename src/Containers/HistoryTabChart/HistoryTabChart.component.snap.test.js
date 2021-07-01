import * as React from 'react';
import { shallow } from 'enzyme';

import HistoryTabChartComponent from './HistoryTabChart.component';

describe('#HistoryTabChartComponent', () => {
  it('should render correctly', () => {
    expect(shallow(<HistoryTabChartComponent />)).toMatchSnapshot();
  });
});
