import Image from 'next/image';
import Link from 'next/link';
// import ColorButton from '@/components/ColorButton'
import styles from './page.module.css';
// import SearchBox from '../components/SearchBox.client';
import Greeter from '../components/Greeter'; 


export default function Home({ data }) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      
      <div>
      <Greeter/>
      <div className={styles.spacer}></div>
      <ul>
        <li><Link href="/cities/stockholm">Väder i Stockholm</Link></li>
        <li><Link href="/cities/paris">Väder i Paris</Link></li>
        <li><Link href="/cities/london">Väder i London</Link></li>
      </ul>
    </div>
      <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

    </main>
  )
}
