import styles from './fluid-item.module.css';

export const FluidItem = ({ data, onClicked }) => {
  return (
    <div className={styles.card}>
      <figure className={styles.item} onClick={() => onClicked(data.id)}>
        <img className={styles.img} src={data.source} alt="" loading="lazy" />
        <figcaption className={styles.caption}>{data.title}</figcaption>
      </figure>
    </div>
  );
};
