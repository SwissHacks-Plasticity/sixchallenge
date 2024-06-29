import { Company, RecyclingProject } from '@/app/data/types';

export type PlasticCalculatorState = {
  company?: Company;
  plasticTotal?: number;
  leakage?: number;
  recycling?: number;
  location?: string;
  employees?: number;
  revenue?: number;
  credits?: number;
  recyclingProjects?: RecyclingProject[];
  recyclingProjectsCart?: RecyclingProject[];
};

export type PlasticCalculatorContextProps = {
  state: PlasticCalculatorState;
  updateFormState: (state: Partial<PlasticCalculatorState>) => void;
};

export type StepProps = {
  handleContinue: () => void;
}
