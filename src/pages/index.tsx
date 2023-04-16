import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Barge - Product Manager</title>
        <meta name="description" content="James Barge - Product Manager based in London" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          James Barge
        </h1>
        <p className={styles.description}>
          Product Manager based in London
        </p>
        <div className={styles.grid}>
          <a href="https://keebo.com" className={styles.card}>
            <h2>Currently: Keebo</h2>
            <p>Learn more about Keebo, where I currently work as a product manager.</p>
          </a>

          <a href="https://herd.com" className={styles.card}>
            <h2>Previously: Herd</h2>
            <p>Learn more about my role as a product manager at Herd.</p>
          </a>

          <a href="https://www.gov.uk/government/organisations/public-health-england" className={styles.card}>
            <h2>Public Health England</h2>
            <p>Learn more about my time working as a product manager for Public Health England.</p>
          </a>

          <a href="https://lovehomeswap.com" className={styles.card}>
            <h2>LoveHomeSwap</h2>
            <p>Learn more about my experience as a product manager at LoveHomeSwap.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.socialLinks}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:email@example.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </footer>
    </div>
  );
}
