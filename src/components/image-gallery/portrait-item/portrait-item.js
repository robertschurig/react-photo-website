import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './portrait-item.module.css';

export const PortraitItem = ({ data, onClicked }) => (
  <div className={styles.card}>
    <div className={styles.image}>
      <img src={data.source} alt="image_2" aria-hidden="true" loading="lazy" />
    </div>
    <div
      role="button"
      aria-pressed="false"
      aria-label="opens image in lightbox"
      tabIndex={0}
      className={styles.overlay}
      onClick={() => onClicked(data.id)}
      onKeyPress={() => onClicked(data.id)}
    >
      <FontAwesomeIcon icon={faPlus} size="3x" />
    </div>
  </div>
);
