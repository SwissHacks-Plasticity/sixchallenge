
export type PlasticCalculatorState = {
  company?: string;
  plasticTotal?: number;
  leakage?: number;
  recycling?: number;
}

export type PlasticCalculatorContextProps = {
  state: PlasticCalculatorState;
  updateFormState: (state: PlasticCalculatorState) => void;
}