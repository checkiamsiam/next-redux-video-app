import "../styles/globals.css";
import Header from "../src/components/Shared/Header/Header";
import Footer from "../src/components/Shared/footer/Footer";
import client from "../src/utils/dbConnection";

function MyApp({ Component, pageProps }) {
  client.connect().then(console.log("db connected")).catch(console.log("error on db connect"))
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
