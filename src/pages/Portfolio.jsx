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

function Portfolio() {
  const [prices, setPrices] = useState([]);
  const [amounts, setAmounts] = useState({ ethereum: 0, bitcoin: 0, arbitrum: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      setError('Unable to load portfolio prices. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPrices();
  }, []);

  const handleAmountChange = (id, value) => {
    setAmounts((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const totalValue = prices.reduce((sum, coin) => {
    const amount = Number(amounts[coin.id]) || 0;
    return sum + coin.price * amount;
  }, 0);

  return (
    <section className={styles.pageShell}>
      <div className={styles.pageHeader}>
        <h1>Portfolio Calculator</h1>
        <p>Enter your token balances to estimate your total crypto value in USD.</p>
        <div className={styles.pageActions}>
          <Link to="/live-prices" className={styles.linkButton}>
            View Live Prices
          </Link>
        </div>
      </div>

      <div className={styles.pageSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Portfolio</p>
          <h2 className={styles.sectionTitle}>Build a simulated holding breakdown with live rates.</h2>
        </div>

        <div className={styles.portfolioGrid}>
          {prices.map((coin) => {
            const isPositive = coin.change >= 0;
            const amount = Number(amounts[coin.id]) || 0;
            const value = coin.price * amount;

            return (
              <article key={coin.id} className={`${styles.marketCard} ${styles.portfolioCard}`}>
                <div>
                  <h3>{coin.name}</h3>
                  <p className={styles.marketSymbol}>{coin.symbol}</p>
                </div>
                <div className={styles.marketStat}>${coin.price.toLocaleString()}</div>
                <div
                  className={`${styles.marketTrend} ${
                    isPositive ? styles.marketTrendUp : styles.marketTrendDown
                  }`}
                >
                  {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  <span>{Math.abs(coin.change).toFixed(2)}%</span>
                </div>
                <label htmlFor={`${coin.id}-amount`} className={styles.portfolioLabel}>
                  Amount held
                </label>
                <input
                  id={`${coin.id}-amount`}
                  className={styles.portfolioInput}
                  type="number"
                  min="0"
                  step="0.001"
                  value={amounts[coin.id]}
                  onChange={(event) => handleAmountChange(coin.id, event.target.value)}
                  placeholder="0.00"
                />
                <p className={styles.portfolioValueLabel}>
                  Value
                  <strong>${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                </p>
              </article>
            );
          })}
        </div>

        <div className={styles.portfolioSummary}>
          <p className={styles.sectionLabel}>Total Value</p>
          <p className={styles.portfolioTotalValue}>${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>

        <div className={styles.pageActions}>
          <button type="button" className={styles.actionButton} onClick={fetchPrices} disabled={loading}>
            <RefreshCw size={18} />
            {loading ? 'Refreshing...' : 'Refresh Prices'}
          </button>
        </div>

        <p className={styles.messageNote}>
          Enter your token balances to estimate value using current USD prices from CoinGecko.
        </p>
        {error && <p className={styles.messageNote}>{error}</p>}
      </div>
    </section>
  );
}

export default Portfolio;
