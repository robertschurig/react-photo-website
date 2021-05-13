import { useFetch } from 'hooks';
import { ImageGallery } from 'components';

export const Portraits = () => {
  const [data] = useFetch('data/portraits.json');

  return <ImageGallery imageList={data} />;
};
