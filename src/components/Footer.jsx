import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Developer: Ishita</p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/ishitasheraji/web3-explorer.git" target="_blank" rel="noreferrer">
            github.com/ishitasheraji/web3-explorer
          </a>
        </p>
        <p>Batch: 2026</p>
      </div>
    </footer>
  );
}

export default Footer;
