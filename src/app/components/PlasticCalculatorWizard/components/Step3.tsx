import { usePlasticCalculatorWizardState } from "../hooks/usePlasticCalculatorWizardState"

export const Step3: React.FC = () => {
  const { state } = usePlasticCalculatorWizardState();

  return <div>
    <h1>Step 3</h1>
    <p>Brudi, voll nice vo dir!</p>
  </div>
}