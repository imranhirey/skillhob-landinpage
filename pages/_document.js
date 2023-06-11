import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          
          
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
            <meta name="description" content="Skillhob is a platform that connects skilled individuals, recruiters, and companies in the UK. Sign up now to find job opportunities, connect with talent, and solve your hiring challenges."/>
  <meta name="keywords" content="jobs available near me, job vacancy near me, my job, freelance work, job application, job opportunities, it jobs, job vacancy, job search sites, new vacancy, vacancies, places hiring near me, hiring near me, job openings, online work, application for employment, looking for a job, my career, job websites, it jobs near me, jobs hiring, online jobs, find a job, new job, job search, job openings near me"/>
          <link
          rel="icon"
           href="/assets/Skillhob.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
