import { Company } from '@/app/data/types';

export type PlasticCalculatorState = {
  company?: string;
  plasticTotal?: number;
  leakage?: number;
  recycling?: number;
  location?: string;
  employees?: number;
  revenue?: number;
  credits?: number;
};

export type PlasticCalculatorContextProps = {
  state: PlasticCalculatorState;
  updateFormState: (state: { company: Company }) => void;
};
