'use client';

import { useCallback, useState } from 'react';
import SliderInput from '../../SliderInput/SliderInput';
import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';
import { StepProps } from '../types';
import { RecyclingProject } from '@/app/data/types';
import { Card } from '../../card';
import Link from 'next/link';
import Confetti from 'react-confetti/';
import useWindowSize from 'react-use/lib/useWindowSize';


export const Step3: React.FC<StepProps> = () => {
  const { state, updateFormState } = usePlasticCalculatorWizardState();
  const [percentage, setPercentage] = useState(0);
  const [amountProjects, setAmountProjects] = useState(3);
  const { width, height } = useWindowSize();

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

  const addProjectToCart = useCallback(
    (project: RecyclingProject) => {
      const newState = updateProjectsCart(project);
      updateFormState({ recyclingProjectsCart: newState });
      localStorage.setItem('recyclingProjectsCart', JSON.stringify(newState));
      localStorage.setItem('state', JSON.stringify(state));
    },
    [updateFormState],
  );

  const updateProjectsCart = (project: RecyclingProject): RecyclingProject[] => {
    const newState = state.recyclingProjectsCart || [];

    if (!newState.find((p) => p.title === project.title)) {
      newState.push(project);
    }

    return newState;
  };

  return (
    <>
      {percentage >= 100 && <div className='fixed top-0 left-0 z-10'>
        <Confetti
        width={width}
        height={height}
      />
      </div>
      }
      <div>
        <h1>
          {state?.company?.name ?? ''} <span className="text-black">at a glance</span>
        </h1>
        <section className="flex justify-between m-20 ">
          <div>
            <img src="/worldwide.svg" alt="" width={100} height={100} className="mb-2 mx-auto" />
            <span className="text-blue font-bold text-2xl">
              {formatNumber(state.company?.numCountries)} Locations
            </span>
          </div>
          <div>
            <img src="/employees.svg" alt="" width={100} height={100} className="mb-2 mx-auto" />
            <span className="text-blue font-bold text-2xl">
              {formatNumber(state.company?.numEmployees)} Employees
            </span>
          </div>
          <div>
            <img src="/cash.svg" alt="" width={100} height={100} className="mb-2 mx-auto" />
            <span className="text-blue font-bold text-2xl">
              {formatNumber(state.company?.totalRevenue)} Revenue
            </span>
          </div>
        </section>
        <section className="w-[15vw] fixed right-[5vw] top-[30vh]">
          <div className="font-bold mb-2 block text-3xl">You need</div>
          <div className="text-blue font-bold text-3xl mb-6">
            {formatNumber(state.leakage)} Credits to be net Circular Plastic
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
          <p>{formatNumber(state.leakage)} Tons remaining to a prosperous and greener future.</p>
        </section>
        <section>
          <h2>We recommend these projects</h2>
          {state.recyclingProjects &&
            state.recyclingProjects.slice(0, amountProjects).map((p) => {
              return (
                <Card
                  project={p}
                  onAdd={() => {
                    addProjectToCart(p);
                    setPercentage(percentage + 25);
                  }}
                />
              );
            })}
        </section>

        {amountProjects < (state.recyclingProjects?.length || 999) ? (
          <section className="flex justify-center my-12">
            <button className="button blue" onClick={() => setAmountProjects(amountProjects + 3)}>
              More Projects
            </button>
          </section>
        ) : (
          <></>
        )}
      </div>
      <section className="bg-blue p-8 text-white rounded-lg mb-8">
        <h2 className="text-white mb-2">
          <span className="text-white">{state?.company?.name}</span> net Circular Plastic Future
        </h2>
        <h3 className="font-normal text-xl mb-10">Download your free personalized Factsheet</h3>
        <Link href="/summary" className="button">
          Show Summary
        </Link>
      </section>
    </>
  );
};
