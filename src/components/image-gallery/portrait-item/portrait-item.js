import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './portrait-item.module.css';

export const PortraitItem = ({ data, onClicked }) => (
  <div className={styles.container} onClick={() => onClicked(data.id)}>
    <figure className={styles.image}>
      <img src={data.source} alt="" loading="lazy" />
      <div className={styles.overlay}>
        <FontAwesomeIcon icon={faPlus} size="3x" />
      </div>
    </figure>
  </div>
);
