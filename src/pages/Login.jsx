import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Pages.module.css';

function Login({ mode = 'login' }) {
  const [activeMode, setActiveMode] = useState(mode);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirm: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
    setMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    if (activeMode === 'signup') {
      if (!formData.name || !formData.email || !formData.password || !formData.confirm) {
        setError('Please complete every field to create your account.');
        return;
      }
      if (formData.password !== formData.confirm) {
        setError('Passwords do not match.');
        return;
      }
      setMessage('Account created successfully! You can now sign in.');
      return;
    }

    if (!formData.email || !formData.password) {
      setError('Enter your email and password to continue.');
      return;
    }

    setMessage('Welcome back! Login submitted successfully.');
  };

  return (
    <section className={styles.pageShell}>
      <div className={styles.pageHeader}>
        <div className={styles.pageLabelRow}>
          <span className={styles.sectionLabel}>Auth</span>
          <div className={styles.authTabs}>
            <button
              type="button"
              className={`${styles.authTab} ${activeMode === 'login' ? styles.authTabActive : ''}`}
              onClick={() => setActiveMode('login')}
            >
              Login
            </button>
            <button
              type="button"
              className={`${styles.authTab} ${activeMode === 'signup' ? styles.authTabActive : ''}`}
              onClick={() => setActiveMode('signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
        <h1>{activeMode === 'login' ? 'Sign in to Arbitrum Pulse' : 'Create your account'}</h1>
        <p>
          {activeMode === 'login'
            ? 'Securely sign in to access the live crypto dashboard and block simulator tools.'
            : 'Get started with a free account to track prices, simulate blocks, and explore Web3 concepts.'}
        </p>
      </div>

      <section className={styles.pageSection}>
        <div className={styles.authCard}>
          <form onSubmit={handleSubmit} className={styles.authForm}>
            {activeMode === 'signup' && (
              <div className={styles.authField}>
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.authInput}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                />
              </div>
            )}

            <div className={styles.authField}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.authInput}
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
            </div>

            <div className={styles.authField}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className={styles.authInput}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>

            {activeMode === 'signup' && (
              <div className={styles.authField}>
                <label htmlFor="confirm">Confirm password</label>
                <input
                  id="confirm"
                  name="confirm"
                  type="password"
                  className={styles.authInput}
                  value={formData.confirm}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>
            )}

            {error && <div className={styles.authAlert}>{error}</div>}
            {message && <div className={styles.authSuccess}>{message}</div>}

            <button type="submit" className={`${styles.actionButton} ${styles.authSubmit}`}>
              {activeMode === 'login' ? 'Login' : 'Create account'}
            </button>
          </form>

          <p className={styles.authHint}>
            {activeMode === 'login' ? (
              <>New to Arbitrum Pulse? <Link to="/signup">Create an account</Link>.</>
            ) : (
              <>Already have an account? <Link to="/login">Sign in</Link>.</>
            )}
          </p>
        </div>
      </section>
    </section>
  );
}

export default Login;
