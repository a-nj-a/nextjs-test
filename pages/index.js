import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Header from '../components/Header';


export default function Home() {
  return (
    <>
      <Head>
        <title>Veritas protection group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.headingDiv}>
          <h1 className={styles.heading}>Protecting what matters most!</h1>
          <p className={styles.mainP}>
            <span className={styles.span}>Veritas Protection Group</span> <br/>
            is about putting our clients at the center of our mission and by protecting lives, assets and property.
          </p>
        </div>
      </main>
      <section className={styles.sectionTwo}>
        <div className={styles.card}>
          <Image className={styles.icon} alt='icon' width={33} height={40} src='/../public/icon-1.png' />
          <h2 className={styles.h2}>Executive Protection</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          <button className={styles.button}>read more</button>
        </div>
        <div className={styles.card}>
          <Image className={styles.icon} alt='icon' width={40} height={40} src='/../public/icon-2.png' />
          <h2 className={styles.h2}>Estate protection</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          <button className={styles.button}>read more</button>
        </div>
        <div className={styles.card}>
          <Image className={styles.icon} alt='icon' width={33} height={40} src='/../public/icon-3.png' />
          <h2 className={styles.h2}>Valuable asset protection</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          <button className={styles.button}>read more</button>
        </div>
      </section>
    </>
  )
}
