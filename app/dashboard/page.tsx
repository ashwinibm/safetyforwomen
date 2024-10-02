import { Map } from './state-members-map';

import dynamic from "next/dynamic";

// const Map = dynamic(() => import('./state-members-map/map'), { ssr: false });
export default function Page() {
  return <Map />;
}