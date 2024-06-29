'use client';

import { useCallback, useState } from 'react';
import SliderInput from '../../SliderInput/SliderInput';
import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';
import Link from 'next/link';
import { Card } from '../../card';
import { StepProps } from '../types';

export const Step3: React.FC<StepProps> = () => {
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

  const formatNumber = useCallback((number = 0) => {
    // Use the toLocaleString method to add suffixes to the number
    return number.toLocaleString('en-US', {
      // add suffixes for thousands, millions, and billions
      // the maximum number of decimal places to use
      maximumFractionDigits: 2,
      // specify the abbreviations to use for the suffixes
      notation: 'compact',
      compactDisplay: 'short',
    });
  }, []);

  return (
    <>
      <div>
        <h1>
          {state.company?.name} <span className="text-black">at a glance</span>
        </h1>
        <section className="flex justify-between m-20 ">
          <div>
            <img src="/worldwide.svg" alt="" width={100} height={100} className="mb-2" />
            <span className="text-blue font-bold">
              {formatNumber(state.company?.numCountries)} Locations
            </span>
          </div>
          <div>
            <img src="/employees.svg" alt="" width={100} height={100} className="mb-2" />
            <span className="text-blue font-bold">
              {formatNumber(state.company?.numEmployees)} Employees
            </span>
          </div>
          <div>
            <img src="/cash.svg" alt="" width={100} height={100} className="mb-2" />
            <span className="text-blue font-bold">
              {formatNumber(state.company?.totalRevenue)} Revenue
            </span>
          </div>
        </section>
        <section className="w-[15vw] fixed right-[5vw] top-[30vh]">
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
          <button className="button blue filled mt-6">Checkout</button>
        </section>

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
          <span className="text-green">{state.company?.name}</span> net Circular Plastic Future
        </h2>
        <h3 className="font-normal text-xl mb-6">Download your free personalized Factsheet</h3>
        <button className="button">Show Summary</button>
      </section>
    </>
  );
};
