import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';

export const Step4: React.FC = () => {
  const { state } = usePlasticCalculatorWizardState();

  return (
    <div>
      <h1>Step 4</h1>
      <p>Brudi, voll nice vo dir!</p>
    </div>
  );
};
