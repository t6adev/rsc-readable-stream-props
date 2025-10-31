import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p>RSC with ReadableStream In Next.js</p>
      <Link href="/pattern-a" className="mt-4 block underline">
        Pattern A
      </Link>
      <Link href="/pattern-b" className="mt-4 block underline">
        Pattern B
      </Link>
    </div>
  );
}
