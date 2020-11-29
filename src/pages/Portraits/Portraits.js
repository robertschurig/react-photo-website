import { useFetch } from 'shared/hooks/useFetch';
import { ImageGrid } from 'shared/components/ImageGrid/ImageGrid';

export const Portraits = () => {
  const [data] = useFetch('data/portraits.json');

  return <ImageGrid imageList={data} />;
};
