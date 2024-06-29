
import { useCallback } from "react";
import { usePlasticCalculatorWizardState } from "../hooks/usePlasticCalculatorWizardState"
import SliderInput from "../../SliderInput/SliderInput";

export const Step2: React.FC = () => {
  const { state: { plasticTotal, leakage, recycling }, updateFormState } = usePlasticCalculatorWizardState();
  const setTotal = useCallback((value: string) => updateFormState({ plasticTotal: Number(value) }), [updateFormState]);
  const setLeakage = useCallback((value: string) => updateFormState({ leakage: Number(value) }), [updateFormState]);
  const setRecycling = useCallback((value: string) => updateFormState({ recycling: Number(value) }), [updateFormState]);

  return <div>
    <h1>Step 2</h1>
    <section>
      <SliderInput value={String(plasticTotal ?? 0)} label="Total Plastic" min="0" max="100000" stepSize={100} onChange={setTotal}/>
      <SliderInput value={String(leakage ?? 0)} label="Leakage" min="0" max="100000" stepSize={100} onChange={setLeakage}/>
      <SliderInput value={String(recycling ?? 0)} label="Recycling" min="0" max="100000" stepSize={100} onChange={setRecycling}/>
    </section>
  </div>
}