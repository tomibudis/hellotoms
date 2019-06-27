import HomepageView from '#view/homepage';
import { Fragment } from 'react';
import Head from 'next/head';

const Homepage = () => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" type="text/css" href="_next/static/css/styles.chunk.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <title>Hellotoms!</title>
      </Head>
      <body>
        <style jsx global>{`
          @font-face{
            font-family:"GraphikLight";
            src:url("/static/fonts/graphik/Graphik-Light.eot");
            src:url("/static/fonts/grahik/Graphik-Light.eot") format("eot"),url("/static/fonts/graphik/Graphik-Light.svg") format("svg"),
            url("/static/fonts/graphik/Graphik-Light.ttf") format("ttf"),url("/static/fonts/graphik/Graphik-Light.woff") format("woff")
          }
          @font-face{
            font-family:"GraphikRegular";
            src:url("/static/fonts/graphik/Graphik-Regular.eot");
            src:url("/static/fonts/graphik/Graphik-Regular.eot") format("eot"),url("/static/fonts/graphik/Graphik-Regular.svg") format("svg"),
            url("/static/fonts/graphik/Graphik-Regular.ttf") format("ttf"),url("/static/fonts/graphik/Graphik-Regular.woff") format("woff")
          }
          @font-face{
            font-family:"GraphikMedium";
            src:url("/static/fonts/graphik/Graphik-Medium.eot");
            src:url("/static/fonts/graphik/Graphik-Medium.eot") format("eot"),url("/static/fonts/graphik/Graphik-Medium.svg") format("svg"),
            url("/static/fonts/graphik/Graphik-Medium.ttf") format("ttf"),url("/static/fonts/graphik/Graphik-Medium.woff") format("woff")
          }
          body {
            font-family: GraphikRegular;
            font-size: 14px;
          }
          .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
            color: #3cb7ff;
            background-color: #E7F6FF;
          }
          .nav-pills .nav-link:hover {
            color: #3cb7ff;
          }
          .nav-link{
            color: #606060;
          }
        `}</style>
        <HomepageView />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
      </body>
    </Fragment>
  )
}

export default Homepage;