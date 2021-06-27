import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './portrait-item.module.css';

export const PortraitItem = ({ data, onSelected }) => {
  const keyPressHandler = ({ key }) => {
    if (key !== 'Enter') {
      return;
    }

    onSelected(data.id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src={data.source}
          alt="image_2"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
      <div
        role="button"
        aria-label="opens image in lightbox"
        tabIndex={0}
        className={styles.overlay}
        onClick={() => onSelected(data.id)}
        onKeyPress={keyPressHandler}
      >
        <FontAwesomeIcon icon={faPlus} size="3x" />
      </div>
    </div>
  );
};
