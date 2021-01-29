import Head from 'next/head'
import About from '../components/about'

function Index() {
  return (
    <>
      <Head>
        <title>fanjia38.github.io</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
      <About/>
      <footer>
        <p>Copyright (c) 2017-2021 fanjia38.github.io</p>

        <style jsx>{`
          footer {
            width: 100%;
            font-size: 0.8rem;
            border-top: 3px double #589738;
            margin-top: 300px;
          }

          p {
            margin-top: 30px;
            text-align: center;
            letter-spacing: 1px;
          }
        `}</style>
      </footer>
    </>
  )
}
export default Index