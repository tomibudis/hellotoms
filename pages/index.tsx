import type { NextPage } from 'next'
import Head from 'next/head'

import { Homepage, About, Experience, Work, AdditionalProject, Contact } from '@views/index';
import { Navbar } from '@components/index';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hellotoms 🤟</title>
        <meta name="description" content="Landing page hellotoms created by nextjs typescript" />
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
  )
}

export default Home
