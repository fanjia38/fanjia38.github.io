function About() {
  return (
    <>
      <section>
        <h1>About</h1>
        <div>test</div>
      </section>
      <style jsx>{`
      section {
        margin: 20px;
      }
      section h1 {
        margin: 0 0 20px;
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
      }
      `}</style>
    </>
  )
}
export default About