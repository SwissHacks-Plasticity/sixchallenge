import { useCallback, useEffect } from 'react';
import { StepProps } from '../types';
import './LoadingStep.css';
import { LoadingBanner } from '../../LoadingBanner/LoadingBanner';
import { fetchSustainabilityCategories, sortProjectsByCategoryMatch } from '@/app/chat.service';
import {
  usePlasticCalculatorWizardState
} from '@/app/components/PlasticCalculatorWizard/hooks/usePlasticCalculatorWizardState';
import { RecyclingProject } from '@/app/data/types';

export const LoadingStep: React.FC<StepProps> = ({ handleContinue }) => {
  const { state, updateFormState } = usePlasticCalculatorWizardState();
  const setRecyclingProjects = useCallback((recyclingProjects: RecyclingProject[]) => updateFormState({ recyclingProjects: recyclingProjects }), [updateFormState]);

  useEffect(() => {
    setTimeout(handleContinue, 3000);
  }, []);

  useEffect(() => {
    fetchSustainabilityCategories(state.company?.name || '').then((categories) => {
      const sortedProjects = sortProjectsByCategoryMatch(categories || [], state.recyclingProjects || []);

      setRecyclingProjects(sortedProjects);
    });
  }, [fetchSustainabilityCategories, sortProjectsByCategoryMatch, state]);

  return <div className='flex flex-col align-center justify-center'>
    <h1 className='text-center loading -mb-5'>Calculating your plastic footprint</h1>
    <div>
      <LoadingBanner />
    </div>
  </div>;
};