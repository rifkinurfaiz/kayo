import { useEffect, useState } from 'react';

const useHistoryTabDetail = props => {
  const [historyAssets, setHistoryAssets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const data = await props.getHistoryAssets();

      setHistoryAssets(data);
      setLoading(false);
    };

    getData();
  }, [props]);

  return [historyAssets, loading];
};

export default useHistoryTabDetail;
