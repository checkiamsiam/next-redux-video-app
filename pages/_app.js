import "../styles/globals.css";
import Header from "../src/components/Shared/Header/Header";
import Footer from "../src/components/Shared/footer/Footer";
import { store } from "../src/utils/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
