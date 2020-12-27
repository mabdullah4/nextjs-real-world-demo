import Head from "next/head";

import styles from "../styles/Home.module.css";

function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            <h1>Hello World</h1>
        </div>
    );
}

export default Home;
