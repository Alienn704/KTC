import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {
          <nav className="bg-gray-100 p-4 shadow-md">
            <ul className="flex space-x-6 justify-center">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/products">Product</Link>
              </li>
            </ul>
          </nav>
        }
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
