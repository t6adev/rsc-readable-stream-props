import { use, Suspense } from 'react';

export const StreamingNode = ({
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
