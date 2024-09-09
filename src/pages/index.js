import Layout from "@/components/common/layout";
import Head from "next/head";

import AboutMe from "@/components/home/about-me";
import Stack from "@/components/home/stack";
import Project from "@/components/home/projects";
import Activity from "@/components/home/activity";

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
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="stack">
        <Stack />
      </div>
      <div id="activity">
        <Activity />
      </div>
      <div id="projects">
        <Project />
      </div>
    </Layout>
  );
}
