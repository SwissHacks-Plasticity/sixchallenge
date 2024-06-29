'use client';

import Image from 'next/image';
import Autocomplete from './components/autocomplete';
import { PlasticCalculatorWizard } from './components/PlasticCalculatorWizard/PlasticCalculatorWizard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 background-gradient-blue">
      <div className="z-10 flex flex-col items-center justify-center">
        <img src="/Logo_gross.svg" alt="Vercel Logo" className="w-full h-full" />
        <Link href="/compensator" className="button">
          Take Action
        </Link>
      </div>
    </main>
  );
}
