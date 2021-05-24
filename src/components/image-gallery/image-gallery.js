import styles from './image-gallery.module.css';

export const ImageGallery = ({ children, isFluid }) => {
  return (
    <div className={isFluid ? styles.containerFluid : styles.container}>
      {children}
    </div>
  );
};
