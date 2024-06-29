
import { useCallback } from "react";
import { usePlasticCalculatorWizardState } from "../hooks/usePlasticCalculatorWizardState"

export const Step2: React.FC = () => {
  const { updateFormState } = usePlasticCalculatorWizardState();
  const setNumbers = useCallback(() => updateFormState({ plasticTotal: 1000, leakage: 1000, recycling: 1000 }), [updateFormState])

  return <div>
    <h1>Step 2</h1>
    <button onClick={setNumbers}>Set numbers</button>
  </div>
}