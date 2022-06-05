import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Numiko FE Tech Test";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Numiko FE Tech Test" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
