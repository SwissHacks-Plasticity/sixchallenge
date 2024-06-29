"use client";

import { PropsWithChildren, createContext, useCallback, useMemo, useState } from 'react';
import { PlasticCalculatorContextProps, PlasticCalculatorState } from './types';
import { usePlasticCalculatorWizardState } from './hooks/usePlasticCalculatorWizardState';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';

const WizardSteps = [
  Step1,
  Step2,
  Step3
];


export const PlasticCalculatorContext = createContext<PlasticCalculatorContextProps>({
  state: {},
  updateFormState: () => { },
});

export const PlasticCalculatorContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<PlasticCalculatorState>({});

  const updateFormState = useCallback((values: Partial<PlasticCalculatorState>) => {
    console.log("Updating state with", values);
    setState({ ...state, ...values })
  }, [state, setState]);

  return (<PlasticCalculatorContext.Provider value={{ state, updateFormState }}>
    {children}
  </PlasticCalculatorContext.Provider>);
};

export const PlasticCalculatorWizardHandler: React.FC = () => {
  const { state: wizardState } = usePlasticCalculatorWizardState();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onContinue = useCallback(() =>
    setCurrentStepIndex(Math.min(WizardSteps.length - 1, currentStepIndex + 1)),
    [currentStepIndex, setCurrentStepIndex]
  );

  const onBack = useCallback(() =>
    setCurrentStepIndex(Math.max(0, currentStepIndex - 1)),
    [currentStepIndex, setCurrentStepIndex]
  );

  const CurrentStep = useMemo(() => WizardSteps[currentStepIndex], [currentStepIndex]);

  const debug = useMemo(() => JSON.stringify(wizardState), [wizardState]);

  return (<div>
      <div>
        <CurrentStep />
      </div>
      <button onClick={onBack} disabled={currentStepIndex === 0}>
        Back
      </button>
      <button onClick={onContinue} disabled={currentStepIndex === WizardSteps.length - 1}>
        Continue
      </button>
      <div>
        {debug}
      </div>
    </div>)
}

export const PlasticCalculatorWizard: React.FC = () => {
  return <PlasticCalculatorContextProvider>
    <PlasticCalculatorWizardHandler />
  </PlasticCalculatorContextProvider>
}