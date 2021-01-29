import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RestCapital - Future of Finance is here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Welcome to <span style={{fontFamily: "Impact"}}>Rest<span style={{color: "red"}}>Capital</span></span></span>
        </h1>
        <p style={{textAlign: "center"}}>We are the leading startup Hedge fund capital. Focusing on most promising ALT coins and meme stocks.<br />
        Our main philosophy is that stock can only go up, so why don't invest all your money with us?<br />
        Disclaimer: not beholden to any Wall Street suit, just to <a style={{color: "red"}} href="https://www.reddit.com/r/wallstreetbets/" target="_BLANK">wallstreetbets</a></p>
      </main>

      <footer className={styles.footer}>
          <i>Powered by Stupidity</i>
      </footer>
    </div>
  )
}
