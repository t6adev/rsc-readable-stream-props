import { Suspense } from 'react';

import { StreamingNode } from './StreamingNode';

export const ServerReceiver = ({ stream }: { stream: ReadableStream }) => {
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
