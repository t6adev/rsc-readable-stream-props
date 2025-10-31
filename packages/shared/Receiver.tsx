'use client';

import { useEffect, useState, useRef, use, Suspense } from 'react';

export const ReceiverPatternA = ({ stream }: { stream: ReadableStream }) => {
  const [output, setOutput] = useState('');
  const streamRef = useRef<ReadableStream | null>(null);

  useEffect(() => {
    if (streamRef.current) return;
    streamRef.current = stream;
    const reader = stream.getReader();

    (async () => {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          setOutput((p) => p + '--- Completed ---');
          break;
        }
        setOutput((p) => p + value);
      }
    })();
  }, [stream]);
  return <div>{output}</div>;
};

const StreamingNode = ({
  readableStreamReadResultPromise,
  reader,
}: {
  readableStreamReadResultPromise: Promise<ReadableStreamReadResult<any>>;
  reader: ReadableStreamDefaultReader;
}) => {
  const { done, value } = use(readableStreamReadResultPromise);
  if (done) return '--- Completed ---';
  return (
    <>
      <span>{value}</span>
      <Suspense fallback="">
        <StreamingNode readableStreamReadResultPromise={reader.read()} reader={reader} />
      </Suspense>
    </>
  );
};

export const ReceiverPatternB = ({ stream }: { stream: ReadableStream }) => {
  const reader = !stream.locked ? stream.getReader() : null;

  if (!reader) return null;

  return (
    <div className="w-96">
      <p className="text-2xl">See the Networktab too:</p>
      <p className="mt-8 text-xl">
        <Suspense fallback="loading...">
          <StreamingNode readableStreamReadResultPromise={reader.read()} reader={reader} />
        </Suspense>
      </p>
    </div>
  );
};
