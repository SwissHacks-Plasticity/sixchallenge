import { useEffect } from "react"
import { StepProps } from "../types"
import "./LoadingStep.css"
import { LoadingBanner } from "../../LoadingBanner/LoadingBanner"

export const LoadingStep: React.FC<StepProps> = ({ handleContinue }) => {
  useEffect(() => { setTimeout(handleContinue, 3000) }, []);

  return <div className="flex flex-col align-center justify-center">
    <h1 className="text-center loading -mb-5">Calculating your plastic footprint</h1>
    <div>
      <LoadingBanner />
    </div>
  </div>
}