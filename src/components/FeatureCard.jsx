import styles from '../styles/FeatureCard.module.css';

function FeatureCard({ title, description, icon }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default FeatureCard;
