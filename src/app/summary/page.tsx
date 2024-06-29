'use client';
import { useEffect, useState } from 'react';
import { formatSwissNumber } from '../components/PlasticCalculatorWizard/components/ResultStep';
import { Card } from '../components/card';
import { Company, RecyclingProject } from '../data/types';

export default function Summary() {
  const [company, setCompany] = useState<Company>();
  const [projects, setProjects] = useState<RecyclingProject[]>([]);

  useEffect(() => {
    const company = JSON.parse(localStorage.getItem('company') ?? '{}') as Company;
    const projects = JSON.parse(
      localStorage.getItem('recyclingProjectsCart') ?? '[{}]',
    ) as RecyclingProject[];
    setCompany(company);
    setProjects(projects);
  }, []);

  return (
    <>
      <img src="/Summary-Logo.svg" alt="" />
      <main className="flex flex-col mx-20">
        <h1 className="text-white">
          <span className="text-green">{company?.name} </span>
          Plastic Footprint
        </h1>
        <section className="flex justify-between mb-16">
          <div className="m-14 ml-0">
            <h3>Plastic Production</h3>
            <h2 className="text-green">{formatSwissNumber(company?.totalPlastic ?? 0)} Tons</h2>
            <span className="text-sm">
              75 000 tons of plastic—equivalent to theweight of over 8 900 elephants!
            </span>
          </div>
          <div className="m-14">
            <h3>Recycled plastic</h3>
            <h2 className="text-green">
              {formatSwissNumber(company?.totalPlastic ?? 1 * (company?.plasticRecycledRate ?? 1))}{' '}
              Tons
            </h2>
            <span className="text-sm">
              300 000 tons of plastic—equivalent to theweight of over 11 900 elephants!
            </span>
          </div>
          <div className="m-14">
            <h3>Leaked plastic</h3>
            <h2 className="text-green">
              {formatSwissNumber(company?.totalPlastic ?? 1 * (company?.plasticLeakageRate ?? 1))}{' '}
              Tons
            </h2>
            <span className="text-sm">
              75 000 tons of plastic—equivalent to theweight of over 8 900 elephants!
            </span>
          </div>
        </section>
        <section className="mb-16">
          <h1 className="text-white">
            <span className="text-green">{company?.name} </span>
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
            {projects.map((project: RecyclingProject) => (
              <Card project={project} onAdd={() => {}} />
            ))}
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
