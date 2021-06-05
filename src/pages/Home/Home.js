import { useEffect, useState } from 'react';
import { ImageGallery } from 'components';
import { useFetch } from 'hooks';
import { PortraitItem } from 'components/image-gallery/portrait-item';
import { ImageModal } from 'components/image-gallery/modal/image-modal';

export const Home = () => {
  const [selectedImageId, setSelectedImageId] = useState();
  const [items, setItems] = useState();
  const [data] = useFetch('images/portraits/index.json');

  const imageClickedHandler = (id) => setSelectedImageId(id);
  const imageOverlayCloseHandler = () => setSelectedImageId(null);

  useEffect(() => {
    const items = data.slice(0, 8);
    setItems(items);
  }, [data]);

  return (
    <>
      {items && (
        <ImageGallery>
          {items.map((imageData) => (
            <PortraitItem
              key={imageData.id}
              data={imageData}
              onClicked={imageClickedHandler}
            />
          ))}
        </ImageGallery>
      )}

      {selectedImageId && (
        <ImageModal
          selectedImageId={selectedImageId}
          imageList={items}
          onCloseClicked={imageOverlayCloseHandler}
        />
      )}
    </>
  );
};
