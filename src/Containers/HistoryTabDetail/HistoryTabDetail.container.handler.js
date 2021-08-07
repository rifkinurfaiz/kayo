import axios from 'axios';

const getHistoryAssets = () => async () => {
  const config = {
    headers: {
      'x-api-key': 'A2ZhB5gDWtZ2uliFmv8qafBV3scoOeN7ZPUrWgq4'
    }
  };
  const url = 'https://2fiqm0x6pb.execute-api.us-east-2.amazonaws.com/default/getAssets';

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
