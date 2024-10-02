import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

const GMap = dynamic(() => import('./state-members-map/google-map'), {
  ssr: false,
  loading: () => <p>A map is loading</p>,
});

const Page = () => {
  const Map = useMemo(() => GMap, []);

  return <div style={{ height: '100vh', width: '100%' }}>
    <Map />
  </div>;
}

export default Page;