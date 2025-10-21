import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">WEB PROGRAMMER CHALLENGE</h1>
        <h2 className="text-2xl">PT. JAVIS TEKNOLOGI ALBAROKAH</h2>
        <div className="mt-8 space-y-2">
          <p className="text-xl font-semibold">Sebastian Belmero Sitorus</p>
          <p>0813-7223-9370</p>
          <p>sebastianbelmerositorus@gmail.com</p>
          <Link
            href="https://www.linkedin.com/in/sebastian-belmero-sitorus" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
