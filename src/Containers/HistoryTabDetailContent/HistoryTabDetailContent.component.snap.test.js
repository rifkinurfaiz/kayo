import * as React from 'react';
import { shallow } from 'enzyme';

import HistoryTabDetailContentComponent from './HistoryTabDetailContent.component';

describe('HistoryTabDetailContentComponent', () => {
  const props = [
    {
      year: 2020,
      data: [
        {
          month: 'January',
          assets: [
            {
              id: 'jenius',
              name: 'Jenius',
              amount: 'Rp10.000.000'
            },
            {
              id: 'bca',
              name: 'BCA',
              amount: 'Rp10.200.140.234'
            },
            {
              id: 'ovo',
              name: 'OVO',
              amount: 'Rp2.040.000'
            },
            {
              id: 'gopay',
              name: 'Gopay',
              amount: 'Rp1.000'
            }
          ],
          totalAmount: 'Rp212.181.234'
        }
      ]
    }
  ];

  it('should render correctly', () => {
    expect(
      shallow(<HistoryTabDetailContentComponent data={props} />)
    ).toMatchSnapshot();
  });
});
