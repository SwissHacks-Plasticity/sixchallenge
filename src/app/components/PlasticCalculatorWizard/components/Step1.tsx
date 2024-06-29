import { useCallback } from 'react';
import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';
import Autocomplete from '../../autocomplete';
import { Company } from '@/app/data/types';
import { StepProps } from '../types';

export const Step1: React.FC<StepProps> = () => {
  const { updateFormState } = usePlasticCalculatorWizardState();
  const setCompany = useCallback((company: Company) => updateFormState({ company: company }), [updateFormState]);

  return (
    <div>
      <h1>Lorem ipsum ist Text, der gerne als Platzhalter</h1>
      <label className="font-bold mb-2 block">Your Company</label>
      <Autocomplete onChange={setCompany}/>
    </div>
  );
};
