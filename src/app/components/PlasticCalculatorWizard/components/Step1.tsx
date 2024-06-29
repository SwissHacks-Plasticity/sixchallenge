import { useCallback } from 'react';
import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';
import Autocomplete from '../../autocomplete';

export const Step1: React.FC = () => {
  const { updateFormState } = usePlasticCalculatorWizardState();
  const setCompany = useCallback(() => updateFormState({ company: 'Givaudan' }), [updateFormState]);

  return (
    <div>
      <h1>Lorem ipsum ist Text, der gerne als Platzhalter</h1>
      <label className="font-bold mb-2 block">Your Company</label>
      <Autocomplete className="w-full" />
    </div>
  );
};
