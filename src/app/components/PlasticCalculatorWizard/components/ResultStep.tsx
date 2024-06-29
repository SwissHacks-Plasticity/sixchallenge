import { useMemo } from "react";
import { usePlasticCalculatorWizardState } from "../hooks/usePlasticCalculatorWizardState";
import { StepProps } from "../types";

const elephantWeight = 5;

function formatSwissNumber(number: number) {
  const formatter = new Intl.NumberFormat('de-CH', {
  });
  return formatter.format(number).replace(/,/g, "'");
}

export const ResultStep: React.FC<StepProps> = ({ handleContinue }) => {
  const { state: { leakage } } = usePlasticCalculatorWizardState();

  const nrOfElephants = useMemo(() => Math.floor((leakage ?? 0) / elephantWeight), [leakage]);

  return <div>
    <h1 className="mb-2 mt-20">{formatSwissNumber(leakage?? 0)} tons</h1>
    <h2>equivalent to the weight of over {formatSwissNumber(nrOfElephants ?? 0)} elephants!</h2>
    <div className="text-left mt-20">
      <button className="button blue filled mb-5" onClick={handleContinue}>Buy credits now</button>
      <br />
      <button className="button blue">Contact us</button>
    </div>
  </div>
}