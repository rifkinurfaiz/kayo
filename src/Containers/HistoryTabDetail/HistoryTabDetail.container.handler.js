import axios from 'axios';

import { AWS_API_KEY, AWS_ENDPOINT } from '@env';

const getHistoryAssets = () => async () => {
  const config = {
    headers: {
      'x-api-key': AWS_API_KEY
    }
  };
  const url = 'https://yxa5s46aoc.execute-api.ap-southeast-1.amazonaws.com/default/getAssets';
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
