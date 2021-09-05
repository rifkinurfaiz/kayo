import { useEffect, useState } from 'react';

const useHistoryTabDetail = props => {
  const [historyAssets, setHistoryAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {

      const data = await props.getHistoryAssets();

      setHistoryAssets(data);
      setLoading(false);
    };

    getData();
  }, [props]);

  return [historyAssets, loading];
};

export default useHistoryTabDetail;
