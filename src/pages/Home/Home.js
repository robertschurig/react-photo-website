import { useEffect, useState } from 'react';
import { ImageGrid } from 'shared/components/ImageGrid/ImageGrid';
import { useFetch } from 'shared/hooks/useFetch';

export const Home = () => {
  const [data] = useFetch('data/portraits.json');
  const [items, setItems] = useState();

  useEffect(() => {
    const items = data.slice(0, 6);
    setItems(items);
  }, [data]);

  return <>{items && <ImageGrid imageList={items} />}</>;
};