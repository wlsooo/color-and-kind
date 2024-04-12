import Link from 'next/link'
import Head from 'next/head'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <header>
          <nav className="navbar">
              <a href="index.html" className="navbar_logo">c&k</a>

              <ul className="navbar_menu">
                  <li className="nav-item"><a href="explain.html" className="nav-link">색각이상 정보</a></li>
                  <li className="nav-item"><a href="test.html" className="nav-link">색각이상 검사</a></li>
                  <li className="nav-item"><a href="colorPicker.html" className="nav-link">이미지 색 추출</a></li>
              </ul>

              <div className="nav_toggleBtn" id="nav_toggle">
                  <i className="fas fa-bars"></i>
              </div>
          </nav>
          {/* <menu classNameName="navbar">
            <li><Link href="/color">메뉴1</Link></li>
            <li><Link href="/test">메뉴2</Link></li>
          </menu> */}
        </header>
        <div>{children}</div>
        <footer>Footer</footer>
      </body>
    </html>

  );
}