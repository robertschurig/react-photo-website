import styles from './fluid-item.module.css';

export const FluidItem = ({ data, onSelected }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.card}
      onClick={() => onSelected(data.id)}
      onKeyPress={() => onSelected(data.id)}
    >
      <figure className={styles.item}>
        <img className={styles.img} src={data.source} alt="" loading="lazy" />
        <figcaption className={styles.caption}>{data.title}</figcaption>
      </figure>
    </div>
  );
};
