import { useState } from 'react';

import { ImageGridItem } from './image-grid-item';
import { ImageModal } from './image-modal';

import './index.sass';

export const ImageGrid = ({ imageList }) => {
  const [selectedImageId, setSelectedImageId] = useState();

  const imageClickedHandler = id => setSelectedImageId(id);
  const imageOverlayCloseHandler = () => setSelectedImageId(null);

  return (
    <div className="c-image-grid">
      <div className="columns is-multiline">
        {imageList.map(imageData => {
          return (
            <div
              key={imageData.id}
              className="column is-one-third-desktop is-half-tablet"
            >
              <ImageGridItem data={imageData} onClicked={imageClickedHandler} />
            </div>
          );
        })}
      </div>
      {selectedImageId && (
        <ImageModal
          selectedImageId={selectedImageId}
          imageList={imageList}
          onCloseClicked={imageOverlayCloseHandler}
        />
      )}
    </div>
  );
};
