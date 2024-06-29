'use client';

import { PropsWithChildren, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { PlasticCalculatorContextProps, PlasticCalculatorState, StepProps } from './types';
import { LoadingStep } from './components/LoadingStep';
import recyclingProjects from '@/app/data/recycling_projects.json';
import { RecyclingProject } from '@/app/data/types';

type StepConfig = {
  component: React.FC<StepProps>;
  canContinue?: boolean;
  canGoBack?: boolean;
};

const WizardSteps: StepConfig[] = [
  {
    component: Step1,
    canContinue: true,
    canGoBack: false,
  },
  {
    component: LoadingStep,
    canContinue: false,
    canGoBack: false,
  },
  {
    component: Step2,
    canContinue: true,
    canGoBack: false,
  },
  {
    component: Step3,
    canContinue: false,
    canGoBack: true,
  },
];

export const PlasticCalculatorContext = createContext<PlasticCalculatorContextProps>({
  state: {
    company: undefined,
    plasticTotal: 0,
    leakage: 0,
    recycling: 0,
    location: 'Switzerland',
    employees: 1000,
    revenue: 10000000,
    credits: 22,
    recyclingProjects: recyclingProjects as RecyclingProject[],
  },
  updateFormState: () => {},
});

export const PlasticCalculatorContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<PlasticCalculatorState>({});

  const updateFormState = useCallback(
    (values: Partial<PlasticCalculatorState>) => {
      console.log('Updating state with', values);
      setState({ ...state, ...values });
    },
    [state, setState],
  );

  useEffect(() => console.log('New state', state), [state]);

  return (
    <PlasticCalculatorContext.Provider value={{ state, updateFormState }}>
      <div className="flex w-full background-logo">{children}</div>
    </PlasticCalculatorContext.Provider>
  );
};

export const PlasticCalculatorWizardHandler: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onContinue = useCallback(
    () => setCurrentStepIndex(Math.min(WizardSteps.length - 1, currentStepIndex + 1)),
    [currentStepIndex, setCurrentStepIndex],
  );

  const onBack = useCallback(
    () => setCurrentStepIndex(Math.max(0, currentStepIndex - 1)),
    [currentStepIndex, setCurrentStepIndex],
  );

  const currentStep = useMemo(() => WizardSteps[currentStepIndex], [currentStepIndex]);

  function getBackgroundClass() {
    switch (currentStepIndex) {
      case 0:
        return 'background-bottle';
      case 2:
        return 'background-turtle';
      default:
        return 'background-no-image';
    }
  }

  console.log('Current step index', currentStepIndex);

  return (
    <div className={`flex w-full flex-col justify-center relative ${getBackgroundClass()}`}>
      <div className="px-[27vw] py-20">
        <button
          className="button blue back mb-10"
          onClick={onBack}
          hidden={!currentStep.canGoBack}
          disabled={!currentStep.canGoBack}
        >
          Back
        </button>
        <currentStep.component handleContinue={onContinue} />
        <button
          className="button blue right mt-4"
          onClick={onContinue}
          hidden={!currentStep.canContinue}
          disabled={!currentStep.canContinue}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const PlasticCalculatorWizard: React.FC = () => {
  return (
    <PlasticCalculatorContextProvider>
      <PlasticCalculatorWizardHandler />
    </PlasticCalculatorContextProvider>
  );
};
