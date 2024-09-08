import Layout from "@/components/common/layout";
import Head from "next/head";

import AboutMe from "@/components/home/about-me";
import Stack from "@/components/home/stack";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ChaeDahee</title>
        <meta
          name="description"
          content="chae-dahee FrontEnd Developer Portfolio"
        />
        <link rel="icon" href="chae-dahee.png" />
      </Head>
      <AboutMe />
      <Stack />
    </Layout>
  );
}
