'use client';

import Image from 'next/image';
import Autocomplete from './components/autocomplete';
import { PlasticCalculatorWizard } from './components/PlasticCalculatorWizard/PlasticCalculatorWizard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 background-gradient-blue">
      <img src="/Logo_gross.svg" alt="Vercel Logo" className="w-full h-full" />
      <button>Take Action</button>
    </main>
  );
}
