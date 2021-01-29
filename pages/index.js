import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RestCaiptal - Future of finance is here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style="font-family: Impact">Rest<span class="color:red">Capital</span></span>
        </h1>
        <p>We are the leading startup Hedge fund capital. Focusing on most promising ALT coins and meme stocks.</p>
        <p>Our main philosophy is that stock can only go up, so why don't invest all your money with us?</p>
        <p>Disclaimer: not beholden to any Wall Street suit, just to <a href="https://www.reddit.com/r/wallstreetbets/" target="_BLANK">wallstreetbets</a></p>
      </main>

      <footer className={styles.footer}>
          Powered by <i>Stupidity</i>
      </footer>
    </div>
  )
}
