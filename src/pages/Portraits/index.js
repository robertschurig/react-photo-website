import { useFetch } from 'hooks/useFetch';
import { ImageGrid } from 'components/ImageGrid';

export const Portraits = () => {
  const [data] = useFetch('data/portraits.json');

  return <ImageGrid imageList={data} />;
};
