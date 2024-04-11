import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <menu className="hello">
            <li><Link href="/color">메뉴1</Link></li>
            <li><Link href="/test">메뉴2</Link></li>
          </menu>
        </header>
        <div>{children}</div>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
