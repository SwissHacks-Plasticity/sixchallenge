'use client';
import { useSearchParams } from 'next/navigation';
import { Card } from '../components/card';

export default function Summary() {
  const searchParams = useSearchParams();
  const company = JSON.parse(searchParams.get('search') ?? '');

  const project = {
    name: 'Project 1',
    location: 'Switzerland',
    employees: 1000,
    revenue: 10000000,
    credits: 22,
    plasticTotal: 25,
    desc: 'Lorem ipsum ist Text, der gerne als Platzhalter genommen wird, wenn es noch keinen richtigen Text gibt. Der Grund dafür ist ein angenehmer Zeilenfall, der einen guten Eindruck von dem finalen Layout vermittelt.',
  };

  return (
    <>
      <img src="/Summary-Logo.svg" alt="" />
      <main className="flex flex-col mx-20">
        <h1 className="text-white">
          <span className="text-green">XXXX </span>
          Plastic Footprint
        </h1>
        <section className="flex justify-between mb-16">
          <div className="m-14 ml-0">
            <h3>Plastic Production</h3>
            <h2 className="text-green">xxxx Tons</h2>
            <span className="text-sm">
              75 000 tons of plastic—equivalent to theweight of over 8 900 elephants!
            </span>
          </div>
          <div className="m-14">
            <h3>Recycled plastic</h3>
            <h2 className="text-green">xxxx Tons</h2>
            <span className="text-sm">
              300 000 tons of plastic—equivalent to theweight of over 11 900 elephants!
            </span>
          </div>
          <div className="m-14">
            <h3>Leaked plastic</h3>
            <h2 className="text-green">xxxx Tons</h2>
            <span className="text-sm">
              75 000 tons of plastic—equivalent to theweight of over 8 900 elephants!
            </span>
          </div>
        </section>
        <section className="mb-16">
          <h1 className="text-white">
            <span className="text-green">XXXX </span>
            net Circular Plastic Future
          </h1>
          <h2 className="text-white">
            Lorem ipsum ist Text, der gerne als Platzhalter genommen wird, wenn es noch keinen
            «richtigen» Text gibt. Der Grund dafür ist ein angenehmer Zeilenfall, der einen guten
            Eindruck von dem finalen Layout vermittelt.
          </h2>
        </section>
        <section className="mb-24">
          <h2 className="text-white mb-16">We recommend these Projects</h2>
          <section className="grid grid-cols-2 gap-16 text-black">
            <Card project={project} onAdd={() => {}} />
            <Card project={project} onAdd={() => {}} />
            <Card project={project} onAdd={() => {}} />
            <Card project={project} onAdd={() => {}} />
          </section>
        </section>
        <section className="mb-32">
          <button className="button green mr-4 bigtext">Buy Credits now</button>
          <button className="button bigtext">Contact us</button>
        </section>
      </main>
    </>
  );
}
