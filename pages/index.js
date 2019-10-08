import HomepageView from '#view/homepage';
import { Fragment } from 'react';
import Head from 'next/head';
import '../src/theme/global-styles.scss';

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
        <style global jsx>{`
          @font-face{
            font-family:"Masbul-Black";
            src: url("/static/fonts/masbul/Masbul-Black.ttf");
          }
          @font-face{
            font-family:"Masbul-Bold";
            src: url("/static/fonts/masbul/Masbul-Bold.ttf");
          }
          @font-face{
            font-family:"Masbul-Book";
            src: url("/static/fonts/masbul/Masbul-Book.ttf");
          }
          @font-face{
            font-family:"Masbul-Light";
            src: url("/static/fonts/masbul/Masbul-Light.ttf");
          }
          @font-face{
            font-family:"Masbul-Medium";
            src: url("/static/fonts/masbul/Masbul-Medium.ttf");
          }
          @font-face{
            font-family:"Sentinel-Light";
            src: url("/static/fonts/sentinel/Sentinel-Light.otf");
          }
          @font-face{
            font-family:"Sentinel-Book";
            src: url("/static/fonts/sentinel/Sentinel-Book.otf");
          }
          
          body {
            font-family: 'Sentinel-Light';
            font-size: 18px;
            background: #F7F7F5 !important;
          }        
          .text-masbul-medium {
            font-family: Masbul-Medium;
          }
          .text-masbul-bold {
            font-family: Masbul-Bold;
          }
          .nav .nav-link.active, .nav-pills .show>.nav-link {
            color: #3E46AD;
            border-bottom: solid #3E46AD
          }
          .nav .nav-link:hover {
            color: #3E46AD !important;
          }
          .nav-link{
            color: #606060;
          }
          .cursor-pointer {
            cursor: pointer;
          }
          .text-primary {
            color: #3E46AD !important;
          };
          .btn-primary-custom {
            background: #3E46AD;
            color: #fff;
            border-color: none !important;
            box-shadow: 0 14px 28px rgba(62,70,173,0.25), 0 10px 10px rgba(62,70,173,0.22);
          }
          .btn-primary-custom:hover {
            background: #5B64D4;
            color: #fff;
            border-color: #5B64D4;
          }
          .btn-primary-custom:active {
            background: #363E9F !important;
            box-shadow: 0 8px 18px rgba(62,70,173,0.25), 0 5px 5px rgba(62,70,173,0.22);
          }
          .btn-primary-custom:focus {
            background: #363E9F !iimportant;
            box-shadow: 0 14px 28px rgba(62,70,173,0.25), 0 10px 10px rgba(62,70,173,0.22);
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