import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './image-gallery.module.css';

const ImageGalleryItem = ({ data, onClicked }) => (
  <div className={styles.galleryItem} onClick={() => onClicked(data.id)}>
    <figure className={styles.image}>
      <img src={data.source} alt="" />
      <div className={styles.overlay}>
        <FontAwesomeIcon icon={faPlus} size="3x" />
      </div>
    </figure>
  </div>
);

export const ImageGallery = ({ imageList }) => {
  const [selectedImageId, setSelectedImageId] = useState();

  const imageClickedHandler = (id) => setSelectedImageId(id);
  const imageOverlayCloseHandler = () => setSelectedImageId(null);

  return (
    <div>
      <div className={styles.columns}>
        {imageList.map((imageData) => (
          <div key={imageData.id} className={styles.column}>
            <ImageGalleryItem data={imageData}></ImageGalleryItem>
          </div>
        ))}
      </div>
    </div>
  );
};

/* {selectedImageId && (
        <ImageModal
          selectedImageId={selectedImageId}
          imageList={imageList}
          onCloseClicked={imageOverlayCloseHandler}
        />
      )} */
