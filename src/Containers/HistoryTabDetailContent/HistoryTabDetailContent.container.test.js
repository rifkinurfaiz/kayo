import HistoryTabDetailContentContainer from './HistoryTabDetailContent.container';

describe('#HistoryTabDetailContentContainer', () => {
  it('should ', () => {
    const props = {
      year: 2020,
      data: [
        {
          month: 'January',
          accounts: [
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
    };

    const container = HistoryTabDetailContentContainer(props);

    expect(container).toBeDefined();
  });
});
