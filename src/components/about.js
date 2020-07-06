function About() {
  return (
    <>
      <section>
        <h1>About</h1>
        <div>
          <h2>S.Iida(Fanjia) / Web Engineer</h2>
          <dl>
            <dt>Skills</dt>
              <dd>PHP(Symfony, FuelPHP) / SQL / Git</dd><dd>JavaScript / TypeScript / React / Webpack / Jest / Node.js / jQuery</dd>
            <dt>Links</dt><dd><a href="https://github.com/fanjia38/" target="_blank">GitHub</a> / <a href="https://twitter.com/fanjia38" target="_blank">Twitter</a> / <a href="https://38fanjia.hatenablog.com/" target="_blank">Memo</a></dd>
          </dl>
        </div>
      </section>
      <style jsx>{`
      section {
        margin: 20px;
      }
      section h1 {
        margin: 0 0 20px;
        position: relative;
      }
      section h1::before {
        content: '';
        position: absolute;
        left: 0;
        width: 50px;
        bottom: 0;
        height: 1px;
        border-bottom: 4px solid #589738;
      }
      div {
        border: 1px solid #589738;
        border-radius: 5px;
        padding: 8px;
      }
      div h2 {
        font-size: 0.8em;
      }
      div p {
        margin: 0;
        font-size: 0.8em;
      }
      div dl {
        font-size: 0.8em;
        margin: 0.5em 0;
      }
      `}</style>
    </>
  )
}
export default About