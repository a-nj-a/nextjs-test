import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Pages.module.css';
import Header from '../components/Header';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <Link href='/'><button className={styles.button}>Back</button></Link>
      </main>
    </>
  )
}