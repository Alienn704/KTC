import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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

      <main className="p-6">
        <Component {...pageProps} />
      </main>
    </>
  );
}
