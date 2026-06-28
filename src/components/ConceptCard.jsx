import styles from '../styles/ConceptCard.module.css';

function ConceptCard({ title, description }) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ConceptCard;
