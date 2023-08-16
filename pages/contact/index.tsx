import Head from 'next/head';
import styles from '../../styles/Home.module.css';

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
                    className={styles.main}
                >   
                    <h1>Contact</h1>
                </main>
            </div>
        </>
    )
}