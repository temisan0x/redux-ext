import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Todos from '../components/Notes'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Todos/>
    </div>
  )
}

export default Home
