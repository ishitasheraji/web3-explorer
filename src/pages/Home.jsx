import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Lock, Cpu, CircleDashed, Wallet } from 'lucide-react';
import HomeIllustration from '../components/HomeIllustration';
import FeatureCard from '../components/FeatureCard';
import ConceptCard from '../components/ConceptCard';
import styles from '../styles/Home.module.css';

const features = [
  {
    icon: <CircleDashed size={28} />,
    title: 'Layer 2 Scaling',
    description: 'Arbitrum increases transaction throughput while keeping Ethereum security intact.',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Lower Fees',
    description: 'Transactions become more affordable by processing off-chain and batching final results on Ethereum.',
  },
  {
    icon: <Lock size={28} />,
    title: 'Faster Finality',
    description: 'Users get quicker confirmations without sacrificing network integrity.',
  },
  {
    icon: <Cpu size={28} />,
    title: 'DeFi & NFTs',
    description: 'Developers can build richer dApps with lower cost and better user experience.',
  },
];

const timeline = [
  {
    icon: <CircleDashed size={24} />,
    title: 'Transaction',
    description: 'A user action enters the network and becomes part of a new blockchain record.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Validation',
    description: 'Nodes verify the transaction details to ensure the network remains secure and accurate.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Block Creation',
    description: 'Verified transactions are grouped into a block that can be added to the chain.',
  },
  {
    icon: <Lock size={24} />,
    title: 'Mining',
    description: 'Proof-of-work or consensus mechanisms secure the block before it is finalized.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'Blockchain',
    description: 'The new block joins the immutable ledger and becomes part of the shared history.',
  },
];

const heroHighlights = [
  {
    title: 'Low gas costs',
    description: 'Move assets and execute contracts with fewer fees than Ethereum mainnet.',
  },
  {
    title: 'Reliable security',
    description: 'Arbitrum inherits Ethereum security through rollup proof mechanisms.',
  },
  {
    title: 'Smooth UX',
    description: 'Faster confirmation times make Web3 feel more like the modern web.',
  },
];

const benefits = [
  { title: 'Scalable dApps', description: 'Build products without worrying about high transaction costs.' },
  { title: 'Ethereum compatibility', description: 'Use familiar tools and smart contracts while scaling on Layer 2.' },
  { title: 'Better onboarding', description: 'Users can interact with Web3 with smaller fees and faster responses.' },
  { title: 'Network composability', description: 'DeFi, NFT, and game apps can connect smoothly on a shared ecosystem.', },
];

function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletName] = useState('MetaMask');

  const toggleWalletConnection = () => {
    setWalletConnected((connected) => !connected);
  };
  return (
    <main className={styles.homeShell}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.kicker}>Arbitrum & Ethereum Layer 2</span>
          <h1>Scale Ethereum with smarter rollups.</h1>
          <p>Learn how Arbitrum makes Ethereum faster, cheaper, and more accessible while preserving security.</p>
          <div className={styles.heroActions}>
            <Link to="/concepts" className={styles.primaryButton}>
              Start Learning Web3
            </Link>
            <Link to="/live-prices" className={styles.secondaryButton}>
              Live Prices
            </Link>
          </div>
          <div className={styles.walletPanel}>
            <div className={styles.walletPanelHeader}>
              <div className={styles.walletIcon}>
                <Wallet size={20} />
              </div>
              <div>
                <p className={styles.walletLabel}>Wallet Connect</p>
                <p className={styles.walletStatus}>
                  {walletConnected ? `${walletName} connected` : 'Not connected'}
                </p>
              </div>
            </div>
            <p className={styles.walletText}>
              Connect a wallet to preview your on-chain dashboard, view balances, and make the app feel more Web3 ready.
            </p>
            <button type="button" className={styles.connectButton} onClick={toggleWalletConnection}>
              {walletConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
            </button>
          </div>
          <div className={styles.heroHighlights}>
            {heroHighlights.map((item) => (
              <div key={item.title} className={styles.heroHighlight}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <HomeIllustration />
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>About Web3</p>
          <h2>What blockchain, Web3, and decentralization really mean.</h2>
        </div>
        <div className={styles.aboutGrid}>
          <ConceptCard
            title="What is Blockchain?"
            description="A distributed record of transactions where every participant helps verify and store data securely."
          />
          <ConceptCard
            title="What is Web3?"
            description="A decentralized internet built on blockchains where users own their data and value flows without a central authority."
          />
          <ConceptCard
            title="Why Decentralization?"
            description="Reducing single points of failure makes networks more resilient, transparent, and censorship-resistant."
          />
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Core Features</p>
          <h2>What makes Layer 2 technology valuable.</h2>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>How It Works</p>
          <h2>From transaction submission to Ethereum finality.</h2>
        </div>
        <div className={styles.timelineRow}>
          {timeline.map((step, index) => (
            <div key={step.title} className={styles.timelineStep}>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < timeline.length - 1 && (
                <span className={styles.stepConnector} aria-hidden="true">↓</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Benefits</p>
          <h2>Practical advantages for users and developers.</h2>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((item) => (
            <article key={item.title} className={styles.benefitCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div>
            <p className={styles.sectionLabel}>Ready to build on Layer 2?</p>
            <h2>Start exploring the Web3 stack with hands-on tools.</h2>
          </div>
          <Link to="/concepts" className={styles.ctaButton}>
            Start Learning Web3
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
