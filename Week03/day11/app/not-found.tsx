import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-6 p-6">
      <Image
        src="/images/not-found.webp"
        alt="not-found-image"
        width={200}
        height={300}
        className="rounded-md shadow-md"
      />

      <p className="text-xl font-semibold text-red-500">
        Oh my goddddd! Cannot find anything huhuhu
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
