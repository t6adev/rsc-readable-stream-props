import { Streamer } from 'my-shared';

export default async function PatternBPage() {
  return <Streamer pattern="B" />;
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const;
};
