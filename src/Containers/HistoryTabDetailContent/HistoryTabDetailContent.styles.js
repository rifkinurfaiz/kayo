import { size } from '../../Utils';
const { scaleWidth, scaleHeight, scaleFont } = size;

export default {
  detailItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(10)
  },
  yearContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaleHeight(10)
  },
  yearText: {
    fontWeight: 'bold',
    fontSize: scaleFont(17)
  },
  scrollView: {
    marginBottom: scaleHeight(70)
  }
};
