'use client';

import Image from 'next/image';
import Autocomplete from './components/autocomplete';
import { PlasticCalculatorWizard } from './components/PlasticCalculatorWizard/PlasticCalculatorWizard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 background-gradient-blue">
      <div className="z-10 w-full flex flex-col items-center justify-center">
        <img src="/Logo gross.svg" alt="PlastiCredit" className="w-2/3 mb-10" />
        <Link href="/compensator" className="button">
          Take Action
        </Link>
      </div>
    </main>
  );
}
