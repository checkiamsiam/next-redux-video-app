import "../styles/globals.css";
import Header from "../src/components/Shared/Header/Header";
import Footer from "../src/components/Shared/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
