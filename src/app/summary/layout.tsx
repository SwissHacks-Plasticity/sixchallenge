import Image from 'next/image';
import { Suspense } from 'react';

export default function SummaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-col min-h-screen background-gradient-onlyblue text-white">
        <Suspense>{children}</Suspense>
      </main>

      <footer className="bg-darkBlue flex items-center flex-col text-xl text-white">
        <Image
          src="/Logo_button_negativ.svg"
          width={200}
          height={200}
          alt={'Logo'}
          priority
        ></Image>
        <div className=" w-1/2 justify-between flex  mb-8">
          <div>About us</div> <div>Contact</div> <div>Projects</div>
        </div>
        <div className="mb-8 text-sm">Social Media Links</div>
        <div className="mb-10 text-lg">
          <span className="mr-5">Data protection</span>
          <span>Imprint</span>
        </div>
      </footer>
    </>
  );
}
