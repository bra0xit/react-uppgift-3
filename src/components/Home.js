import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

function Home({ data }) {
  return (
    <Layout>
      <Header />
      <main className={styles.main}>
      </main>
      <Footer />
    </Layout>
  )
}

export default Home;