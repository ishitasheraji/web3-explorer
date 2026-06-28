import { Link } from 'react-router-dom';
import ConceptCard from '../components/ConceptCard';
import styles from '../styles/Pages.module.css';

const comparisons = [
  {
    title: 'Web2 vs Web3',
    leftTitle: 'Web2',
    leftText: 'Data and apps are owned by centralized companies that control access and monetization.',
    rightTitle: 'Web3',
    rightText: 'Users own data and value flows directly through decentralized networks without single-point control.',
  },
  {
    title: 'Ethereum vs Bitcoin',
    leftTitle: 'Bitcoin',
    leftText: 'A digital store of value and payment network with a focus on security and scarcity.',
    rightTitle: 'Ethereum',
    rightText: 'A programmable blockchain that enables smart contracts and decentralized applications.',
  },
  {
    title: 'Public Key vs Private Key',
    leftTitle: 'Public Key',
    leftText: 'A shared address that others use to send funds or verify signatures.',
    rightTitle: 'Private Key',
    rightText: 'A secret credential used to sign transactions and prove ownership securely.',
  },
  {
    title: 'Blockchain vs Traditional Databases',
    leftTitle: 'Traditional Database',
    leftText: 'Centralized storage managed by one entity with permissioned updates.',
    rightTitle: 'Blockchain',
    rightText: 'A distributed ledger where many participants agree on updates without a central authority.',
  },
];

const concepts = [
  {
    title: 'Smart Contracts',
    description: 'Programs that run on the blockchain and execute automatically when conditions are met.',
  },
  {
    title: 'Decentralization',
    description: 'A network design that shares power and reduces reliance on a single server or company.',
  },
  {
    title: 'Layer 2',
    description: 'Scaling solutions like Arbitrum that improve speed and cost while leveraging Ethereum security.',
  },
  {
    title: 'Gas Fees',
    description: 'The cost paid to process and secure transactions on a blockchain network.',
  },
];

function Concepts() {
  return (
    <section className={styles.pageShell}>
      <div className={styles.pageHeader}>
        <h1>Concepts Explained</h1>
        <p>Compare key Web3 ideas in visual cards so you can learn the differences quickly.</p>
        <div className={styles.pageActions}>
          <Link to="/live-prices" className={styles.linkButton}>
            View Live Prices
          </Link>
        </div>
      </div>

      <div className={styles.pageSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Quick Comparison</p>
          <h2 className={styles.sectionTitle}>See how foundational Web3 ideas differ side by side.</h2>
        </div>
        <div className={styles.comparisonGrid}>
          {comparisons.map((item) => (
            <article key={item.title} className={styles.comparisonCard}>
              <h3 className={styles.comparisonHeader}>{item.title}</h3>
              <div className={styles.comparisonColumns}>
                <div className={styles.comparisonColumn}>
                  <strong className={styles.comparisonTitle}>{item.leftTitle}</strong>
                  <p className={styles.comparisonItem}>{item.leftText}</p>
                </div>
                <div className={styles.comparisonColumn}>
                  <strong className={styles.comparisonTitle}>{item.rightTitle}</strong>
                  <p className={styles.comparisonItem}>{item.rightText}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.pageSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Foundational Terms</p>
          <h2 className={styles.sectionTitle}>Core Web3 concepts in plain language.</h2>
        </div>
        <div className={styles.pageCardGrid}>
          {concepts.map((concept) => (
            <ConceptCard key={concept.title} title={concept.title} description={concept.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Concepts;
