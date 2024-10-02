import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import Spinner from '@/app/ui/dashboard/spinner';

const GMap = dynamic(() => import('./state-members-map/google-map'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', width: '100%' }}><Spinner /></div>,
});

const Page = () => {
  const Map = useMemo(() => GMap, []);

  return <div style={{ height: '100vh', width: '100%' }}>
    <Map />
  </div>;
}

export default Page;