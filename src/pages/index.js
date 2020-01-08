import Header from '../components/header'
import Footer from '../components/footer'
import Contents from '../components/contents'

export default function Index() {
  return (
    <div>
      <Header />
      <Contents />
      <Footer />

      <style jsx>{`
      @charset "UTF-8";

      html {
        font-size: 62.5%;
      }

      body {
        color: #333;
        font-size: 1.2rem;
        font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
      }

      *, *::before, *::after {
        box-sizing: border-box;
      }
      a:link, a:visited, a:hover, a:active {
        color: #ffa500;
        text-decoration: none;
      }
      `}</style>
    </div>
  )
}