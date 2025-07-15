import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {
          <nav className="bg-gray-100 p-4 shadow-md">
            <ul className="flex space-x-6 justify-center">
              <li>
                <Link
                  href="/task-ssr"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  TaskSSR
                </Link>
              </li>
              <li>
                <Link
                  href="/task-ssg"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  TaskSSG
                </Link>
              </li>
              <li>
                <Link
                  href="/task-csr"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  TaskCSR
                </Link>
              </li>
            </ul>
          </nav>
        }
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
