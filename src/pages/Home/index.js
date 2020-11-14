import { ImageGrid } from 'components/ImageGrid';
import { useFetch } from 'hooks/useFetch';

export const Home = () => {
  const [data] = useFetch('data/portraits.json');
  const items = data.slice(0, 6);

  return (
    <>
      <ImageGrid imageList={items} />
    </>
  );
};
