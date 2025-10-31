import { Streamer } from 'my-shared';

export default async function PatternAPage() {
  return <Streamer pattern="A" />;
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const;
};
