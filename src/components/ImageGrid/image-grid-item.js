import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const ImageGridItem = ({ data, onClicked }) => (
  <div className="box c-image-grid__item" onClick={() => onClicked(data.id)}>
    <figure className="image is-3by4">
      <img src={data.source} alt="" />
      <div className="overlay c-fade-in">
        <FontAwesomeIcon icon={faPlus} size="3x" />
      </div>
    </figure>
  </div>
);
