import { Metadata } from 'next';

import About from './components/About';

export const metadata: Metadata = { title: 'About SRE' };

export default function AboutPage() {
  return <About />;
}
