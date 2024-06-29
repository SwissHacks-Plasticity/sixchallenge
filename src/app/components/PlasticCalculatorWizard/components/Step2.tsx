import { useCallback, useEffect, useMemo } from 'react';
import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';
import SliderInput from '../../SliderInput/SliderInput';


export const Step2: React.FC = () => {
  const { state, updateFormState } = usePlasticCalculatorWizardState();
  const setTotal = useCallback((value: string) => updateFormState({ plasticTotal: Math.floor(Number(value)) }), [updateFormState]);
  const setLeakage = useCallback((value: string) => updateFormState({ leakage: Math.floor(Number(value)) }), [updateFormState]);
  const setRecycling = useCallback((value: string) => updateFormState({ recycling: Math.floor(Number(value)) }), [updateFormState]);

  const { plasticTotal, leakage, recycling, maxTotal } = useMemo(() => {
    const total = state.company?.totalPlastic || 0;
    const recycling = total * (state.company?.plasticRecycledRate || 0);
    const leakage = (total - recycling) * (state.company?.plasticLeakageRate || 0);

    const calculatedMax = total * 3

    return {
      plasticTotal: state.plasticTotal ?? total,
      leakage: state.leakage ?? leakage,
      recycling: state.recycling ?? recycling,
      maxTotal: calculatedMax === 0 ? 10000: calculatedMax
    };
  }, [state]);

  const calcStepSize = useCallback((maxValue: number)=> {
    return Math.pow(10,Math.floor(Math.log10(maxValue) - 2))
  }, [])

  const maxLeakage = useMemo(() => plasticTotal ? plasticTotal - recycling : 0, [plasticTotal, recycling]);
  const maxRecycling = useMemo(() => plasticTotal ? plasticTotal : 0, [plasticTotal]);

  const leakagePercentage = useMemo(() => (plasticTotal ? (leakage / maxLeakage) * 100 : 0).toFixed(1), [plasticTotal, leakage]);
  const recyclingPercentage = useMemo(() => (plasticTotal ? (recycling / plasticTotal) * 100 : 0).toFixed(1), [plasticTotal, recycling]);

  const currentLeakage = useMemo(() => Math.min(leakage, maxLeakage), [maxLeakage, leakage]);
  const currentRecycling = useMemo(() => Math.min(recycling, maxRecycling), [maxRecycling, recycling]);

  return <div>
    <h1>Your Plastic Footprint</h1>
    <section className='flex flex-col gap-5'>
      <SliderInput value={String(plasticTotal)} label='Plastic Production' min='0' max={String(maxTotal)}
                   stepSize={calcStepSize(maxTotal)} onChange={setTotal} />
      <div className='flex flex-row gap-5'>
        <SliderInput value={String(currentRecycling)} label='Recycled Plastic' min='0' max={String(maxRecycling)}
                     stepSize={calcStepSize(maxTotal)} onChange={setRecycling} />
        <div
          className='border-bordergreen border-4 rounded-lg shadow-lg px-5 py-3 bg-white w-1/3 flex flex-col justify-center'>
          <h3 className='font-semibold text-xs'>Recycled Rate</h3>
          <div className='text-3xl font-bold align-text-top'>
            <span className='text-4xl'>{recyclingPercentage}</span>%
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-5'>
        <SliderInput value={String(currentLeakage)} label='Leaked Plastic' min='0' max={String(maxLeakage)}
                     stepSize={calcStepSize(maxTotal)} onChange={setLeakage} />
        <div
          className='border-bordergreen border-4 rounded-lg shadow-lg px-5 py-3 bg-white w-1/3 flex flex-col justify-center'>
          <h3 className='font-semibold text-xs'>Leakage Rate</h3>
          <div className='text-3xl font-bold align-text-top'>
            <span className='text-4xl'>{leakagePercentage}</span>%
          </div>
        </div>
      </div>
    </section>
  </div>;
};