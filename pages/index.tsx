import type { NextPage } from 'next'
import Head from 'next/head'

import HomepageView from '../src/views/Homepage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hellotoms</title>
        <meta name="description" content="Landing page hellotoms created by nextjs typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageView />
    </div>
  )
}

export default Home
