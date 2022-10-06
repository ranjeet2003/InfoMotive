import "../styles/globals.css";
import "../styles/Header.scss";
import "../styles/Home.scss";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
