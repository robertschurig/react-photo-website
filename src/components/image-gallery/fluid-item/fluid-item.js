import styles from './fluid-item.module.css';

export const FluidItem = ({ data, onClicked }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.card}
      onClick={() => onClicked(data.id)}
      onKeyPress={() => onClicked(data.id)}
    >
      <figure className={styles.item}>
        <img className={styles.img} src={data.source} alt="" loading="lazy" />
        <figcaption className={styles.caption}>{data.title}</figcaption>
      </figure>
    </div>
  );
};
