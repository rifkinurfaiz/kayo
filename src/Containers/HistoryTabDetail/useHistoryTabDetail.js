import { useEffect, useState } from 'react';

const useHistoryTabDetail = props => {
  const [historyAssets, setHistoryAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHistoryAssetsByYear = year => async () => {
    setLoading(true);

    const data = await props.getHistoryAssets(year);

    setHistoryAssets(data);
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await props.getHistoryAssets();

      setHistoryAssets(data);
      setLoading(false);
    };

    getData();
  }, [props]);

  return [historyAssets, loading, getHistoryAssetsByYear];
};

export default useHistoryTabDetail;
