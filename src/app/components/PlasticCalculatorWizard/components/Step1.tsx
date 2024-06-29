import { useCallback } from 'react';
import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';
import Autocomplete from '../../autocomplete';

export const Step1: React.FC = () => {
  const { updateFormState } = usePlasticCalculatorWizardState();
  const setCompany = useCallback(() => updateFormState({ company: 'Givaudan' }), [updateFormState]);

  return (
    <div>
      <h1>Step 1</h1>
      <Autocomplete></Autocomplete>
      <button onClick={setCompany}>Set company</button>
    </div>
  );
};
