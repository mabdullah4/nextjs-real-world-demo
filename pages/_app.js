import React from "react";
import Head from "next/head";

import Navbar from "./../components/shared/Navbar";
import Footer from "./../components/shared/Footer";

import "../styles/globals.css";

function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <title>NextJs | RealWorld Demo</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </React.Fragment>
    );
}

export default App;
