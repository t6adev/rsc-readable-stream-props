import { ClientReceiverPatternA, ClientReceiverPatternB } from './ClientReceiver';
import { ServerReceiver } from './ServerReceiver';

export const Streamer = async ({ pattern }: { pattern: 'A' | 'B' | 'C' }) => {
  const text =
    'Did you know you can pass a ReadableStream as a prop from a Server Component to a Client Component? But...';

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
  if (pattern === 'A') {
    return (
      <div>
        <div>Pattern A (useEffect + useState):</div>
        <ClientReceiverPatternA stream={stream} />
      </div>
    );
  }
  if (pattern === 'B') {
    return (
      <div>
        <div>Pattern B (Client Component with Suspense + use()):</div>
        <ClientReceiverPatternB stream={stream} />
      </div>
    );
  }
  return (
    <div>
      <div>Pattern C (Server Component with Suspense + use()):</div>
      <ServerReceiver stream={stream} />
    </div>
  );
};
