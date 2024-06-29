'use client';

import Image from 'next/image';
import Autocomplete from './components/autocomplete';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <Autocomplete></Autocomplete>
    </main>
  );
}
