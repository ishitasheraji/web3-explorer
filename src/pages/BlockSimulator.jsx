import { useEffect, useState } from 'react';
import styles from '../styles/Pages.module.css';

const TARGET_PREFIX = '00';

async function hashString(value) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

// Compute block hash from data, previous hash, and nonce.
async function computeBlockHash(data, previousHash, nonce) {
  return hashString(`${data}|${previousHash}|${nonce}`);
}

function BlockSimulator() {
  const [block1Data, setBlock1Data] = useState('Transfer 3 ETH to Alice');
  const [block1Nonce, setBlock1Nonce] = useState(0);
  const [block1Hash, setBlock1Hash] = useState('');
  const [block1Mining, setBlock1Mining] = useState(false);

  const [block2Data, setBlock2Data] = useState('Stake tokens on Arbitrum');
  const [block2Nonce, setBlock2Nonce] = useState(0);
  const [block2Hash, setBlock2Hash] = useState('');
  const [block2PrevHash, setBlock2PrevHash] = useState('');
  const [block2Mining, setBlock2Mining] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const block1Valid = block1Hash.startsWith(TARGET_PREFIX);
  const block2Valid = block2Hash.startsWith(TARGET_PREFIX) && block2PrevHash === block1Hash;

  useEffect(() => {
    async function updateHash() {
      const hash = await computeBlockHash(block1Data, 'GENESIS', block1Nonce);
      setBlock1Hash(hash);
    }
    updateHash();
  }, [block1Data, block1Nonce]);

  useEffect(() => {
    async function updateHash() {
      const prevHash = block2PrevHash || block1Hash;
      const hash = await computeBlockHash(block2Data, prevHash, block2Nonce);
      setBlock2Hash(hash);
    }
    updateHash();
  }, [block2Data, block2Nonce, block2PrevHash, block1Hash]);

  async function mineBlock1() {
    setBlock1Mining(true);
    setStatusMessage('Mining Block 1...');
    let nextNonce = block1Nonce;
    while (true) {
      const candidate = await computeBlockHash(block1Data, 'GENESIS', nextNonce);
      if (candidate.startsWith(TARGET_PREFIX)) {
        setBlock1Nonce(nextNonce);
        setBlock1Hash(candidate);
        setStatusMessage('Block 1 mined successfully.');
        setBlock1Mining(false);
        return;
      }
      nextNonce += 1;
      if (nextNonce % 120 === 0) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
      }
    }
  }

  async function mineBlock2() {
    setBlock2Mining(true);
    setStatusMessage('Mining Block 2...');
    const prevHash = block1Hash || 'GENESIS';
    let nextNonce = block2Nonce;
    while (true) {
      const candidate = await computeBlockHash(block2Data, prevHash, nextNonce);
      if (candidate.startsWith(TARGET_PREFIX)) {
        setBlock2Nonce(nextNonce);
        setBlock2PrevHash(prevHash);
        setBlock2Hash(candidate);
        setStatusMessage('Block 2 mined and chained to Block 1.');
        setBlock2Mining(false);
        return;
      }
      nextNonce += 1;
      if (nextNonce % 120 === 0) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
      }
    }
  }

  return (
    <section className={styles.pageShell}>
      <div className={styles.pageHeader}>
        <h1>Block Simulator</h1>
        <p>Interact with nonce, hashing, and chain validation to see why block data is immutable.</p>
      </div>

      <div className={styles.pageSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Mining Demo</p>
          <h2 className={styles.sectionTitle}>Simulate two linked blocks and watch the chain break.</h2>
        </div>
        <div className={styles.blockGrid}>
          <article className={styles.blockCard}>
            <h3>Block 1</h3>
            <label className={styles.blockLabel} htmlFor="block1Data">
              Block Data
            </label>
            <textarea
              id="block1Data"
              className={styles.blockTextarea}
              value={block1Data}
              onChange={(event) => setBlock1Data(event.target.value)}
            />
            <label className={styles.blockLabel} htmlFor="block1Nonce">
              Nonce
            </label>
            <input
              id="block1Nonce"
              className={styles.blockInput}
              type="number"
              value={block1Nonce}
              onChange={(event) => setBlock1Nonce(Number(event.target.value))}
            />
            <p className={styles.blockField}>
              <strong>Hash</strong>
              <span>{block1Hash || 'Computing...'}</span>
            </p>
            <p className={`${styles.statusBadge} ${block1Valid ? styles.statusValid : styles.statusInvalid}`}>
              {block1Valid ? 'Valid block' : 'Needs mining'}
            </p>
            <div className={styles.blockActions}>
              <button type="button" className={styles.blockButton} onClick={mineBlock1} disabled={block1Mining}>
                {block1Mining ? 'Mining…' : 'Mine Block 1'}
              </button>
            </div>
          </article>

          <article className={styles.blockCard}>
            <h3>Block 2</h3>
            <label className={styles.blockLabel} htmlFor="block2Data">
              Block Data
            </label>
            <textarea
              id="block2Data"
              className={styles.blockTextarea}
              value={block2Data}
              onChange={(event) => setBlock2Data(event.target.value)}
            />
            <label className={styles.blockLabel} htmlFor="block2Nonce">
              Nonce
            </label>
            <input
              id="block2Nonce"
              className={styles.blockInput}
              type="number"
              value={block2Nonce}
              onChange={(event) => setBlock2Nonce(Number(event.target.value))}
            />
            <label className={styles.blockLabel} htmlFor="block2PrevHash">
              Previous Hash
            </label>
            <input
              id="block2PrevHash"
              className={styles.blockInput}
              type="text"
              value={block2PrevHash || block1Hash}
              readOnly
            />
            <p className={styles.blockField}>
              <strong>Hash</strong>
              <span>{block2Hash || 'Computing...'}</span>
            </p>
            <p className={`${styles.statusBadge} ${block2Valid ? styles.statusValid : styles.statusInvalid}`}>
              {block2Valid ? 'Valid chain' : 'Invalid chain'}
            </p>
            <div className={styles.blockActions}>
              <button type="button" className={styles.blockButton} onClick={mineBlock2} disabled={block2Mining || !block1Hash}>
                {block2Mining ? 'Mining…' : 'Mine Block 2'}
              </button>
            </div>
          </article>
        </div>
        <p className={styles.messageNote}>
          When Block 1 changes, Block 2 becomes invalid because its previous hash no longer matches the new chain head.
        </p>
      </div>
    </section>
  );
}

export default BlockSimulator;
