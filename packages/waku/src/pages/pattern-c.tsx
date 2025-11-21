import { Streamer } from 'my-shared';

export default async function PatternCPage() {
  return <Streamer pattern="C" />;
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const;
};
