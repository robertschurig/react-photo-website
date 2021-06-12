import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './portrait-item.module.css';

export const PortraitItem = ({ data, onClicked }) => (
  <div className={styles.card}>
    <figure className={styles.image}>
      <img src={data.source} alt="image_2" loading="lazy" />
    </figure>
    <div
      role="button"
      tabIndex={0}
      className={styles.overlay}
      onClick={() => onClicked(data.id)}
      onKeyPress={() => onClicked(data.id)}
    >
      <FontAwesomeIcon icon={faPlus} size="3x" />
    </div>
  </div>
);
