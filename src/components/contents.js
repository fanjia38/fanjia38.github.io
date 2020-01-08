const Contents = () => (
  <main>
    <h2>APPS</h2>
    <ul>
      <li><a href="./apps/lunar-calendar/index.html">lunar calendar</a></li>
      <li>作成中...</li>
    </ul>

    <h2>OTHERS</h2>
    <ul>
      <li><a href="https://twitter.com/38fanjia">twitter</a></li>
      <li><a href="https://github.com/38fanjia">github</a></li>
      <li><a href="https://38fanjia.hatenablog.com">hatenablog</a></li>
    </ul>

    <style jsx>{`
    main {
      width: 970px;
      height: 300px;
      margin: 30px auto 40px;
    }

    main h2 {
      margin: 15px 0;
      padding-left: 8px;
      border-left: 5px solid #589738;
      font-size: 1.4rem;
      line-height: 1.2;
    }

    main ul {
      list-style-type: none;
      margin: 15px;
    }

    main ul > li {
      margin-bottom: 15px;
    }

    main ul > li a:hover {
      text-decoration: underline;
    }
    `}</style>
  </main>
);

export default Contents;