import { useCallback } from 'react';
import { usePlasticCalculatorWizardState } from '../hooks/usePlasticCalculatorWizardState';
import Autocomplete from '../../autocomplete';
import { Company } from '@/app/data/types';
import { StepProps } from '../types';

export const Step1: React.FC<StepProps> = () => {
  const { updateFormState } = usePlasticCalculatorWizardState();
  const setCompany = useCallback((company: Company) => {
    const total = company.totalPlastic;
    const recycling = total * (company.plasticRecycledRate);
    const leakage = (total - recycling) * (company.plasticLeakageRate);

    updateFormState({ company: company, plasticTotal: total, recycling: recycling, leakage: leakage });
  }, [updateFormState]);

  return (
    <div>
      <h1>Find Your Company and Start Your Sustainability Journey</h1>
      <p>Achieve your sustainability goals effortlessly with tailored recommendations and streamlined impact initiatives.</p>
      <label className='font-bold mb-2 block'>Your Company</label>
      <Autocomplete onChange={setCompany} />
    </div>
  );
};
