'use client';

import { PropsWithChildren, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { PlasticCalculatorContextProps, PlasticCalculatorState } from './types';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';

const WizardSteps = [Step1, Step2, Step3, Step4];

export const PlasticCalculatorContext = createContext<PlasticCalculatorContextProps>({
  state: {
    company: 'Givaudan',
    plasticTotal: 0,
    leakage: 0,
    recycling: 0,
    location: 'Switzerland',
    employees: 1000,
    revenue: 10000000,
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
    [state, setState]
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
    [currentStepIndex, setCurrentStepIndex]
  );

  const onBack = useCallback(
    () => setCurrentStepIndex(Math.max(0, currentStepIndex - 1)),
    [currentStepIndex, setCurrentStepIndex]
  );

  const CurrentStep = useMemo(() => WizardSteps[currentStepIndex], [currentStepIndex]);

  function getBackgroundClass() {
    switch (currentStepIndex) {
      case 0:
        return 'background-bottle';
      case 1:
        return 'background-turtle';
      default:
        return 'background-no-image';
    }
  }

  return (
    <div className={`flex w-full flex-col justify-center relative ${getBackgroundClass()}`}>
      <div className="px-[27vw]">
        <button
          className="button blue back mb-10"
          onClick={onBack}
          hidden={currentStepIndex === 0}
          disabled={currentStepIndex === 0}
        >
          Back
        </button>
        <CurrentStep />
        <button
          className="button blue mt-4"
          onClick={onContinue}
          disabled={currentStepIndex === WizardSteps.length - 1}
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
