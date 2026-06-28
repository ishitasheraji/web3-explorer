import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight, RefreshCw } from 'lucide-react';
import styles from '../styles/Pages.module.css';

const coinConfig = {
  ethereum: { symbol: 'ETH', name: 'Ethereum' },
  bitcoin: { symbol: 'BTC', name: 'Bitcoin' },
  arbitrum: { symbol: 'ARB', name: 'Arbitrum' },
};

const apiEndpoint =
  'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,arbitrum&vs_currencies=usd&include_24hr_change=true';

function LivePrices() {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch live coin prices from CoinGecko and map them to display data.
  async function fetchPrices() {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error('Failed to fetch price data');
      }
      const data = await response.json();
      const updatedPrices = Object.entries(data).map(([id, details]) => ({
        id,
        name: coinConfig[id]?.name || id,
        symbol: coinConfig[id]?.symbol || id.toUpperCase(),
        price: details.usd,
        change: details.usd_24h_change,
      }));
      setPrices(updatedPrices);
    } catch (err) {
      setError('Unable to load live prices. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <section className={styles.pageShell}>
      <div className={styles.pageHeader}>
        <h1>Live Prices</h1>
        <p>Fetch real crypto prices from CoinGecko and monitor ETH, BTC, and ARB in one dashboard.</p>
        <div className={styles.pageActions}>
          <Link to="/concepts" className={styles.linkButton}>
            Study Concepts
          </Link>
        </div>
      </div>

      <div className={styles.pageSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>CoinGecko API</p>
          <h2 className={styles.sectionTitle}>Real-time crypto pricing with refresh support.</h2>
        </div>
        <div className={styles.marketRow}>
          {prices.map((market) => {
            const isPositive = market.change >= 0;
            return (
              <article key={market.id} className={styles.marketCard}>
                <h3>{market.name}</h3>
                <p className={styles.marketSymbol}>{market.symbol}</p>
                <div className={styles.marketStat}>${market.price.toLocaleString()}</div>
                <div
                  className={`${styles.marketTrend} ${
                    isPositive ? styles.marketTrendUp : styles.marketTrendDown
                  }`}
                >
                  {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  <span>{Math.abs(market.change).toFixed(2)}%</span>
                </div>
              </article>
            );
          })}
        </div>
        <div className={styles.pageActions}>
          <button type="button" className={styles.actionButton} onClick={fetchPrices} disabled={loading}>
            <RefreshCw size={18} />
            {loading ? 'Refreshing...' : 'Refresh Prices'}
          </button>
        </div>
        <p className={styles.messageNote}>
          Data is fetched live from CoinGecko. Refresh to update the latest USD price and 24h change percentage.
        </p>
        {error && <p className={styles.messageNote}>{error}</p>}
      </div>
    </section>
  );
}

export default LivePrices;
