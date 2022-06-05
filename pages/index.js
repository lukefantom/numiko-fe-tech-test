import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import Card from "../components/Card/card";

export default function Home() {
  const insightsCard = {
    title: ["Get ", <strong key={"insights"}>insights</strong>, " that help your business grow."],
    info: "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.",
    stats: [
      {
        title: "10k+",
        info: "companies",
      },
      {
        title: "314",
        info: "templates",
      },
      {
        title: "12M+",
        info: "queries",
      },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Card title={insightsCard.title} info={insightsCard.info} stats={insightsCard.stats} image={"/images/image-header-mobile.jpeg"} />
      </section>
    </Layout>
  );
}
