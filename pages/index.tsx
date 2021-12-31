import type { NextPage } from 'next'
import Head from 'next/head'

import { Homepage, About } from '@views/index';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hellotoms 🤟</title>
        <meta name="description" content="Landing page hellotoms created by nextjs typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
      <About />
    </div>
  )
}

export default Home
