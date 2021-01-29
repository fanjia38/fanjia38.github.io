import Head from 'next/head'
import Footer from './footer'

function Layout ({children}) {
  return (
    <>
      <Head>
        <title>fanjia38.github.io</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>
      {children}
      <Footer />
    </>
  )
}
export default Layout