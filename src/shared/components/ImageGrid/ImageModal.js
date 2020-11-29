import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import { useEventListener } from 'shared/hooks/useEventlistener';

const ESCAPE_KEYS = ['27', 'Escape'];
const ARROW_LEFT_KEYS = ['37', 'ArrowLeft'];
const ARROW_RIGHT_KEYS = ['39', 'ArrowRight'];

export const ImageModal = props => {
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