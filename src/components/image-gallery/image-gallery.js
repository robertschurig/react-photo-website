import styles from './image-gallery.module.css';

export const ImageGallery = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
