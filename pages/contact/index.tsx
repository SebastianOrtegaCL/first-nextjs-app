import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export default function Contact() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title> Contact page</title>
                    <meta name='description' content='Contact page'/>
                    <link rel='icon' href='/favicon.ico' /> 
                </Head>

                <main
                    className={`${styles.main} ${inter.className}`}
                >   
                    <h1 className={styles.title}>Contact</h1>
                </main>
                
            </div>
        </>
    )
}