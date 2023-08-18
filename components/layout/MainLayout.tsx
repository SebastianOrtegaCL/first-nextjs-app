import Head from "next/head";
import Navbar from "../Navbar";

export default function MainLayout({ children }) {
    return(
        <div >
            <Head>
                <title> Home - Sebastian</title>
                <meta name="description" content="Home page"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
        </div>
    )
};