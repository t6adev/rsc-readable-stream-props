import { Link } from 'waku';

export default async function HomePage() {
  return (
    <div>
      <p>RSC with ReadableStream In Waku</p>
      <Link to="/pattern-a" className="mt-4 block underline">
        Pattern A
      </Link>
      <Link to="/pattern-b" className="mt-4 block underline">
        Pattern B
      </Link>
      <Link to="/pattern-c" className="mt-4 block underline">
        Pattern C
      </Link>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
