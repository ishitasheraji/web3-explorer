import { Link } from 'react-router-dom';
import styles from '../styles/Pages.module.css';

function NotFound() {
  return (
    <section className={styles.pageShell}>
      <div className={styles.pageHeader}>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist. Use the navigation above to return to the main dashboard.</p>
        <div className={styles.pageActions}>
          <Link to="/" className={styles.linkButton}>
            Return Home
          </Link>
          <Link to="/concepts" className={styles.linkButton}>
            Explore Concepts
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
