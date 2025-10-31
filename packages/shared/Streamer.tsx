import { ReceiverPatternA, ReceiverPatternB } from './Receiver';

export const Streamer = async ({ pattern }: { pattern: 'A' | 'B' }) => {
  const text =
    "Did you know you can pass a ReadableStream as a prop from a Server Component to a Client Component? But...";

  const chunks = text.split(' ').map((t) => `${t} `);

  const stream = new ReadableStream({
    start(controller) {
      let index = 0;

      const interval = setInterval(() => {
        if (index < chunks.length) {
          controller.enqueue(chunks[index]);
          index++;
        } else {
          controller.close();
          clearInterval(interval);
        }
      }, 100);
    },
  });
  if (pattern === 'A')
    return (
      <div>
        <div>Pattern A:</div>
        <ReceiverPatternA stream={stream} />
      </div>
    );
  return (
    <div>
      <div>Pattern B:</div>
      <ReceiverPatternB stream={stream} />
    </div>
  );
};
