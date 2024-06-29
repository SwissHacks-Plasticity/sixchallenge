'use client';

import { useCallback, useState } from 'react';
import SliderInput from '../../SliderInput/SliderInput';
import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';

export const Step3: React.FC = () => {
  const { state, updateFormState } = usePlasticCalculatorWizardState();
  const [percentage, setPercentage] = useState(0);
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
      <div>
        <h1>
          {state.company} <span className="text-black">at a glance</span>
        </h1>
        <section className="flex justify-between m-20 ">
          <div>
            <img src="/worldwide.svg" alt="" width={100} height={100} className="mb-2" />
            <span className="text-blue font-bold">{state.location} Locations</span>
          </div>
          <div>
            <img src="/employees.svg" alt="" width={100} height={100} className="mb-2" />
            <span className="text-blue font-bold">{state.employees} Employees</span>
          </div>
          <div>
            <img src="/cash.svg" alt="" width={100} height={100} className="mb-2" />
            <span className="text-blue font-bold">{state.revenue} Revenue</span>
          </div>
        </section>
        {/* <div className='contents'> */}
        <section className="w-full">
          {' '}
          {/* add class unstuck */}
          <div className="font-bold mb-2 block text-3xl">Your need</div>
          <div className="text-blue font-bold text-3xl mb-6">
            {state.credits} xxx Credit to be net Circular Plastic
          </div>
          <SliderInput
            hideInputNumber={true}
            value={String(percentage ?? 0)}
            min="0"
            max="100"
            stepSize={25}
            disabled={true}
            onChange={(value) => {}}
          />
          <button className="button blue absolute right-[216px] top-[490px]">Checkout</button>
        </section>

        {/* <section className="w-full sticky top-0 left-0 right-0 bg-blue">
          <div className="font-bold mb-2 block text-3xl">Your need</div>
          <div className="text-blue font-bold text-3xl mb-6">
            {state.credits} xxx Credit to be net Circular Plastic
          </div>
          <SliderInput
            hideInputNumber={true}
            value={String(percentage ?? 0)}
            min="0"
            max="100"
            stepSize={25}
            disabled={true} onChange={(value) => {}}/>
        </section> */}
        {/* </div> */}
        <section className="bg-white my-20 px-16 py-10 white-box">
          <p>22,3 Tons remaining to save Lorem ipsum ist Text der gerne.</p>
        </section>
        <section>
          <h2>We recommend these Projects</h2>

          <Card project={project} onAdd={() => setPercentage(percentage + 25)} />
        </section>

        <section className="flex justify-center my-12">
          <button className="button blue">More Projects</button>
        </section>
      </div>
      <section className="bg-blue p-8 text-white rounded-lg mb-8">
        <h2 className="text-white">
          <span className="text-green">{state.company}</span> net Circular Plastic Future
        </h2>
        <h3 className="font-normal text-xl mb-6">Download your free personalized Factsheet</h3>
        <button className="button">Show Summary</button>
      </section>
    </>
  );
};

type Project = {
  name: string;
  location: string;
  employees: number;
  revenue: number;
  credits: number;
  plasticTotal: number;
  desc?: string;
};

const Card = ({ project, onAdd }: { project: Project; onAdd?: () => void }): JSX.Element => {
  return (
    <section className="w-full relative py-8">
      <div className=" bg-white border-lightgreen border-2 rounded-lg right-0 bottom-0 ml-[250px] pl-16 py-6 pr-2 shadow-us">
        <h3>{project.name}</h3>
        <div className="mb-3">{project.desc}</div>
        <div className="flex">
          <div className="mr-6">
            <span className="text-sm">Certification</span>
            <img src="" alt="cert" />
          </div>
          <div>
            <span className="text-sm">Source</span>
            <img src="" alt="source" />
          </div>
        </div>
        <div className="mt-6">
          <button className="button blue filled mr-4" onClick={onAdd}>
            Add
          </button>
          <button className="button blue">Details</button>
        </div>
      </div>
      <img
        src="https://picsum.photos/400"
        alt="project picture"
        className="border-lightgreen border-2 absolute top-0 left-0 block rounded-lg shadow-us"
        width={300}
        height={300}
      />
    </section>
  );
};
