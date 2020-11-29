import { useFetch } from 'shared/hooks';
import { ImageGrid } from 'shared/components';

export const Portraits = () => {
  const [data] = useFetch('data/portraits.json');

  return <ImageGrid imageList={data} />;
};
