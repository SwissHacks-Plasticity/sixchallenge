import { useCallback } from 'react';
import SliderInput from '../../SliderInput/SliderInput';
import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';

export const Step3: React.FC = () => {
  const { state, updateFormState } = usePlasticCalculatorWizardState();
  const setTotal = useCallback(
    (value: string) => updateFormState({ plasticTotal: Number(value) }),
    [updateFormState]
  );

  return (
    <div>
      <h1>
        {state.company} <span className="text-black">at a glance</span>
      </h1>
      <section className="flex justify-between m-20 ">
        <div>
          <img src="" alt="" />
          <span className="text-blue font-bold">{state.location} Locations</span>
        </div>
        <div>
          <img src="" alt="" />
          <span className="text-blue font-bold">{state.employees} Employees</span>
        </div>
        <div>
          <img src="" alt="" />
          <span className="text-blue font-bold">{state.revenue} Revenue</span>
        </div>
      </section>
      <section className="w-full">
        <div className="font-bold mb-2 block">Your need</div>
        <div className="text-blue font-bold">
          {state.credits} xxx Credit to be net Circular Plastic
        </div>
        <SliderInput
          hideInputNumber={true}
          value={String(state.plasticTotal ?? 0)}
          label="Plastic Production"
          min="0"
          max="100000"
          stepSize={100}
          onChange={setTotal}
          disabled={true}
        />
      </section>
      <p>Brudi, voll nice vo dir!</p>
    </div>
  );
};
