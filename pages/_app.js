import React from "react";

import Navbar from "./../components/shared/Navbar";
import Footer from "./../components/shared/Footer";

import "../styles/globals.css";

function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </React.Fragment>
    );
}

export default App;
