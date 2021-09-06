import axios from 'axios';

import { AWS_API_KEY, AWS_ENDPOINT } from '@env';

const getHistoryAssets = () => async (year = '') => {
  const config = {
    headers: {
      'x-api-key': AWS_API_KEY
    }
  };

  const url = `${AWS_ENDPOINT}/getAssets?year=${year}`;

  try {
    const { data } = await axios.get(url, config);

    return data;
  } catch (error) {
    throw new Error();
  }
};

export default {
  getHistoryAssets
};
