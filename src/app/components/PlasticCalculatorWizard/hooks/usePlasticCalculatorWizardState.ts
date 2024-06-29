import { useContext } from "react"
import { PlasticCalculatorContext } from "../PlasticCalculatorWizard";

export const usePlasticCalculatorWizardState = () => {
  return useContext(PlasticCalculatorContext);
}