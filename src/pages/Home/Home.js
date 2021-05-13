import { useEffect, useState } from 'react';
import { ImageGallery } from 'components';
import { useFetch } from 'hooks';

export const Home = () => {
  const [data] = useFetch('data/portraits.json');
  const [items, setItems] = useState();

  useEffect(() => {
    const items = data.slice(0, 6);
    setItems(items);
  }, [data]);

  return <>{items && <ImageGallery imageList={items} />}</>;
};
