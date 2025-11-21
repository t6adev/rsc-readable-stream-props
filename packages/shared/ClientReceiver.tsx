'use client';

import { useEffect, useState, Suspense } from 'react';

import { StreamingNode } from './StreamingNode';

export const ClientReceiverPatternA = ({ stream }: { stream: ReadableStream }) => {
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (stream.locked) return;
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

export const ClientReceiverPatternB = ({ stream }: { stream: ReadableStream }) => {
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
