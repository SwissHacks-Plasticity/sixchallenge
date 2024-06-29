'use client';
import { useEffect, useState } from 'react';
import { Card } from '../components/card';
import { RecyclingProject } from '../data/types';
import { PlasticCalculatorState } from '@/app/components/PlasticCalculatorWizard/types';
function formatSwissNumber(number: number) {
  const formatter = new Intl.NumberFormat('de-CH', {});
  return formatter.format(number).replace(/,/g, "'");
}
export default function Summary() {
  const [state, setState] = useState<PlasticCalculatorState>();
  const [projects, setProjects] = useState<RecyclingProject[]>([]);

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem('state') ?? '{}') as PlasticCalculatorState;
    const projects = JSON.parse(
      localStorage.getItem('recyclingProjectsCart') ?? '[{}]',
    ) as RecyclingProject[];
    setState(state);
    setProjects(projects);
  }, []);

  return (
    <>
      <img src="/Summary-Logo.svg" alt="" />
      <main className="flex flex-col mx-20">
        <h1 className="text-white">
          <span className="text-green">{state?.company?.name} </span>
          Plastic Footprint
        </h1>
        <section className="flex justify-between mb-16">
          <div className="m-14 ml-0">
            <h3>Plastic Production</h3>
            <h1 className="text-lightgreen mb-4">
              {formatSwissNumber(state?.plasticTotal || 0)} Tons
            </h1>
            <span className="text-sm">
              {formatSwissNumber(state?.plasticTotal || 0)} tons of plastic—equivalent to the weight
              of over {formatSwissNumber(Math.floor(state?.plasticTotal ?? 0 / 5) || 0)} elephants!
            </span>
          </div>
          <div className="m-14">
            <h3>Recycled plastic</h3>
            <h1 className="text-lightgreen mb-4">
              {formatSwissNumber(state?.recycling || 0)} Tons
            </h1>
            <span className="text-sm">
              {formatSwissNumber(state?.recycling || 0)} tons of plastic—equivalent to the weight of
              over {formatSwissNumber(Math.floor(state?.recycling ?? 1 / 5) || 0)} elephants!
            </span>
          </div>
          <div className="m-14">
            <h3>Leaked plastic</h3>
            <h1 className="text-lightgreen mb-4">{formatSwissNumber(state?.leakage || 0)} Tons</h1>
            <span className="text-sm">
              {formatSwissNumber(state?.leakage || 0)} tons of plastic—equivalent to the weight of
              over {formatSwissNumber(Math.floor(state?.leakage ?? 1 / 5) || 0)} elephants!
            </span>
          </div>
        </section>
        <section className="mb-16">
          <h1 className="text-white">
            <span className="text-green">{state?.company?.name} </span>
            net Circular Plastic Future
          </h1>
          <h2 className="text-white">
            {state?.company?.name} is committed to achieving 100% circular plastic by 2030. You have{' '}
            {formatSwissNumber(state?.leakage ?? 0)} tons remaining to offset. Select from our
            recommended projects to meet your sustainability goals and contribute to a greener
            future.
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
