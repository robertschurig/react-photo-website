import { useFetch } from 'hooks';
import { useState } from 'react';

import { ImageGallery } from 'components';
import { FluidItem } from 'components/image-gallery/fluid-item';
import { ImageModal } from 'components/image-gallery/modal/image-modal';

export const Sports = () => {
  const [imageList] = useFetch('data/istaf-2016.json');
  const [selectedImageId, setSelectedImageId] = useState();

  const imageClickedHandler = (id) => setSelectedImageId(id);
  const imageOverlayCloseHandler = () => setSelectedImageId(null);

  return (
    <>
      {imageList && (
        <ImageGallery isFluid>
          {imageList.map((imageData) => (
            <FluidItem
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
          imageList={imageList}
          onCloseClicked={imageOverlayCloseHandler}
        />
      )}
    </>
  );

  // return (
  //   <div className="columns is-multiline">
  //     {imageList.map((imageData) => {
  //       return (
  //         <div
  //           key={imageData.id}
  //           className="column is-half-desktop is-one-tablet"
  //         >
  //           <div
  //             className="box c-image-grid__item2"
  //             onClick={() => onClicked(imageData.id)}
  //           >
  //             <figure className="image is-3by2">
  //               <img src={imageData.source} alt="" />
  //               <div className="overlay">
  //                 <span className="text">hello</span>
  //               </div>
  //             </figure>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};
