import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import AOS from "aos";

import {
  Homepage,
  About,
  Experience,
  Work,
  AdditionalProject,
  Contact,
} from "@views/index";
import { Navbar } from "@components/index";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Head>
        <title>Hellotoms.com</title>
        <meta
          name="description"
          content="Landing page hellotoms created by nextjs typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Homepage />
      <About />
      <Experience />
      <Work />
      <AdditionalProject />
      <Contact />
    </div>
  );
};

export default Home;
