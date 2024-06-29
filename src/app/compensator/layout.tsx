import Image from 'next/image';

export default function CompensatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex min-h-screen background-gradient-green justify-center">{children}</main>
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
