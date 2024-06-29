
import { useCallback, useMemo } from "react";
import { usePlasticCalculatorWizardState } from "../hooks/usePlasticCalculatorWizardState"
import SliderInput from "../../SliderInput/SliderInput";

const maxTotal = 10_000_000;

const initialTotal = 5_000_000;
const initialLeakage = 10_000;
const initialRecycling = 10_000;

export const Step2: React.FC = () => {
  const { state, updateFormState } = usePlasticCalculatorWizardState();
  const setTotal = useCallback((value: string) => updateFormState({ plasticTotal: Number(value) }), [updateFormState]);
  const setLeakage = useCallback((value: string) => updateFormState({ leakage: Number(value) }), [updateFormState]);
  const setRecycling = useCallback((value: string) => updateFormState({ recycling: Number(value) }), [updateFormState]);

  const { plasticTotal, leakage, recycling } = useMemo(() => {
    return {
      plasticTotal: state.plasticTotal ?? initialTotal,
      leakage: state.leakage ?? initialLeakage,
      recycling: state.recycling ?? initialRecycling
    }
  }, [state])

  const leakagePercentage = useMemo(() => (plasticTotal ?(leakage / plasticTotal) * 100 : 0).toFixed(1), [plasticTotal, leakage]);
  const recyclingPercentage = useMemo(() => (plasticTotal? (recycling / plasticTotal) * 100 : 0).toFixed(1), [plasticTotal, recycling]);

  const maxLeakage = useMemo(() => plasticTotal ? plasticTotal - (recycling) : 0, [plasticTotal, recycling]);
  const maxRecycling = useMemo(() => plasticTotal ? plasticTotal - (leakage) : 0, [plasticTotal, leakage]);

  const currentLeakage = useMemo(() => Math.min(leakage, maxLeakage), [maxLeakage, leakage])
  const currentRecycling = useMemo(() => Math.min(recycling, maxRecycling), [maxRecycling, recycling])


  console.log({leakagePercentage, recyclingPercentage, maxLeakage, maxRecycling, currentLeakage, currentRecycling });

  return <div>
    <h1>Your Plastic Footprint</h1>
    <section className="flex flex-col gap-5">
      <SliderInput value={String(plasticTotal)} label="Plastic Production" min="0" max={String(maxTotal)} stepSize={1000} onChange={setTotal}/>
      <div className="flex flex-row gap-5">
        <SliderInput value={String(currentRecycling)} label="Recycled Plastic" min="0" max={String(maxRecycling)} stepSize={1000} onChange={setRecycling}/>
        <div className="border-bordergreen border-4 rounded-lg shadow-lg px-5 py-3 bg-white w-1/3">
          <h3 className='font-semibold text-xs'>Recycled Rate</h3>
          <div className="py-5 text-3xl font-bold align-text-top">
            <span className='text-4xl'>{recyclingPercentage}</span>%
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <SliderInput value={String(currentLeakage)} label="Leaked Plastic" min="0" max={String(maxLeakage)} stepSize={1000} onChange={setLeakage}/>
        <div className="border-bordergreen border-4 rounded-lg shadow-lg px-5 py-3 bg-white w-1/3">
          <h3 className='font-semibold text-xs'>Leakage Rate</h3>
          <div className="py-5 text-3xl font-bold align-text-top">
            <span className='text-4xl'>{leakagePercentage}</span>%
          </div>
        </div>
      </div>
    </section>
  </div>
}