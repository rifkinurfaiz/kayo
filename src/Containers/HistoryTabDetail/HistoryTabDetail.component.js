import * as React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';

import HistoryTabDetailContent from '../HistoryTabDetailContent';

const data = [
  {
    year: 2020,
    data: [
      {
        month: 'January',
        accounts: [
          {
            id: 'jenius',
            name: 'Jenius',
            amount: 'Rp10.000.000',
            type: 'Cash'
          },
          {
            id: 'bca',
            name: 'BCA',
            amount: 'Rp10.200.140.234',
            type: 'Cash'
          },
          {
            id: 'ovo',
            name: 'OVO',
            amount: 'Rp2.040.000',
            type: 'Cash'
          },
          {
            id: 'gopay',
            name: 'Gopay',
            amount: 'Rp1.000',
            type: 'Cash'
          },
          {
            id: 'land',
            name: 'Land in Palembang',
            amount: 'Rp1.000.000.000',
            type: 'Property'
          },
          {
            id: 'land',
            name: 'Land in Palembang',
            amount: 'Rp1.000.000.000',
            type: 'Property'
          }
        ],
        totalAmount: 'Rp1.212.181.234'
      },
      {
        month: 'February',
        accounts: [
          {
            id: 'jenius',
            name: 'Jenius',
            amount: 'Rp10.000.000',
            type: 'Cash'
          },
          {
            id: 'bca',
            name: 'BCA',
            amount: 'Rp10.200.140.234',
            type: 'Cash'
          },
          {
            id: 'ovo',
            name: 'OVO',
            amount: 'Rp2.040.000',
            type: 'Cash'
          },
          {
            id: 'gopay',
            name: 'Gopay',
            amount: 'Rp1.000',
            type: 'Cash'
          }
        ],
        totalAmount: 'Rp212.181.234'
      }
    ]
  },
  {
    year: 2021,
    data: [
      {
        month: 'January',
        accounts: [
          {
            id: 'jenius',
            name: 'Jenius',
            amount: 'Rp10.000.000',
            type: 'Cash'
          },
          {
            id: 'bca',
            name: 'BCA',
            amount: 'Rp10.200.140.234',
            type: 'Cash'
          },
          {
            id: 'ovo',
            name: 'OVO',
            amount: 'Rp2.040.000',
            type: 'Cash'
          },
          {
            id: 'gopay',
            name: 'Gopay',
            amount: 'Rp1.000',
            type: 'Cash'
          }
        ],
        totalAmount: 'Rp212.181.234'
      },
      {
        month: 'February',
        accounts: [
          {
            id: 'jenius',
            name: 'Jenius',
            amount: 'Rp10.000.000',
            type: 'Cash'
          },
          {
            id: 'bca',
            name: 'BCA',
            amount: 'Rp10.200.140.234',
            type: 'Cash'
          },
          {
            id: 'ovo',
            name: 'OVO',
            amount: 'Rp2.040.000',
            type: 'Cash'
          },
          {
            id: 'gopay',
            name: 'Gopay',
            amount: 'Rp1.000',
            type: 'Cash'
          }
        ],
        totalAmount: 'Rp212.181.234'
      },
      {
        month: 'March',
        accounts: [
          {
            id: 'jenius',
            name: 'Jenius',
            amount: 'Rp10.000.000',
            type: 'Cash'
          },
          {
            id: 'bca',
            name: 'BCA',
            amount: 'Rp10.200.140.234',
            type: 'Cash'
          },
          {
            id: 'ovo',
            name: 'OVO',
            amount: 'Rp2.040.000',
            type: 'Cash'
          },
          {
            id: 'gopay',
            name: 'Gopay',
            amount: 'Rp1.000',
            type: 'Cash'
          }
        ],
        totalAmount: 'Rp221.181.234'
      },
      {
        month: 'April',
        accounts: [
          {
            id: 'jenius',
            name: 'Jenius',
            amount: 'Rp10.000.000',
            type: 'Cash'
          },
          {
            id: 'bca',
            name: 'BCA',
            amount: 'Rp10.200.140.234',
            type: 'Cash'
          },
          {
            id: 'ovo',
            name: 'OVO',
            amount: 'Rp2.040.000',
            type: 'Cash'
          },
          {
            id: 'gopay',
            name: 'Gopay',
            amount: 'Rp1.000',
            type: 'Cash'
          }
        ],
        totalAmount: 'Rp221.181.234'
      },
      {
        month: 'May',
        accounts: [
          {
            id: 'jenius',
            name: 'Jenius',
            amount: 'Rp10.000.000',
            type: 'Cash'
          },
          {
            id: 'bca',
            name: 'BCA',
            amount: 'Rp10.200.140.234',
            type: 'Cash'
          },
          {
            id: 'ovo',
            name: 'OVO',
            amount: 'Rp2.040.000',
            type: 'Cash'
          },
          {
            id: 'gopay',
            name: 'Gopay',
            amount: 'Rp1.000',
            type: 'Cash'
          }
        ],
        totalAmount: 'Rp221.181.234'
      }
    ]
  }
];

const _renderHistoryTabDetailContent = items =>
  items.map((item, i) => {
    return (
      <View>
        <HistoryTabDetailContent key={i} {...item} />
      </View>
    );
  });

export const HistoryTabDetail = props => {
  return (
    <Swiper loop={false} showsPagination={false}>
      {_renderHistoryTabDetailContent(data)}
    </Swiper>
  );
};

export default HistoryTabDetail;
