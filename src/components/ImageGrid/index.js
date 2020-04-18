import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { useEventListener } from 'hooks/useEventlistener';

import './index.sass';

const ESCAPE_KEYS = ['27', 'Escape'];
const ARROW_LEFT_KEYS = ['37', 'ArrowLeft'];
const ARROW_RIGHT_KEYS = ['39', 'ArrowRight'];

const ImageModal = props => {
  const [currentImageIdx, setCurrentImageIdx] = useState();

  const { imageList, selectedImageId, onCloseClicked } = props;
  const isActive = selectedImageId !== undefined && selectedImageId !== null;

  const keydownHandler = ({ key }) => {
    const keyValue = String(key);

    if (ESCAPE_KEYS.includes(keyValue)) {
      onCloseClicked();
      return;
    }
    if (ARROW_LEFT_KEYS.includes(keyValue)) {
      prevImage();
      return;
    }
    if (ARROW_RIGHT_KEYS.includes(keyValue)) {
      nextImage();
      return;
    }
  };

  const nextImage = () => {
    const nextIndex = currentImageIdx + 1;
    const selectedImageIndex = nextIndex === imageList.length ? 0 : nextIndex;

    setCurrentImageIdx(selectedImageIndex);
  };
  const prevImage = () => {
    const nextIndex = currentImageIdx - 1;
    const selectedImageIndex = nextIndex < 0 ? imageList.length - 1 : nextIndex;

    setCurrentImageIdx(selectedImageIndex);
  };

  useEventListener('keydown', keydownHandler);
  useEffect(() => {
    if (!imageList || !selectedImageId) {
      return;
    }

    const idx = imageList.findIndex(item => item.id === selectedImageId);
    setCurrentImageIdx(idx);
  }, [imageList, selectedImageId]);

  const currentImage = imageList[currentImageIdx];

  return currentImage ? (
    <div className={`c-image-modal modal${isActive ? ' is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="c-image-modal__content">
        <img className="c-image-modal__img" src={currentImage.source} alt="" />
      </div>
      <div className="columns c-image-modal__nav">
        <div className="column is-half">
          <div className="c-image-modal-btn c-image-modal-btn__left">
            <span className="icon" onClick={() => prevImage()}>
              <FontAwesomeIcon icon={faAngleLeft} size="3x" />
            </span>
          </div>
        </div>
        <div className="column is-half">
          <div className="c-image-modal-btn c-image-modal-btn__right">
            <span className="icon" onClick={() => nextImage()}>
              <FontAwesomeIcon icon={faAngleRight} size="3x" />
            </span>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onCloseClicked}
      ></button>
    </div>
  ) : null;
};

const ImageGridItem = ({ data, onClicked }) => {
  return (
    <div className="box c-image-grid__item" onClick={() => onClicked(data.id)}>
      <figure className="image is-3by4">
        <img src={data.source} alt="" />
        <div className="overlay c-fade-in">
          <FontAwesomeIcon icon={faPlus} size="3x" />
        </div>
      </figure>
    </div>
  );
};

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
