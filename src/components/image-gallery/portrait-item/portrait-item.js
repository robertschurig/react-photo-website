import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './portrait-item.module.css';

export const PortraitItem = ({ data, onClicked }) => (
  <div className={styles.card}>
    <figure className={styles.image}>
      <img src={data.source} alt="" loading="lazy" />
    </figure>
    <div className={styles.overlay} onClick={() => onClicked(data.id)}>
      <FontAwesomeIcon icon={faPlus} size="3x" />
    </div>
  </div>
);
