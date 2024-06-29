import React, { useCallback, useId, useMemo } from 'react'
import Decimal from 'decimal.js'
import { NumericFormat } from 'react-number-format'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';


type CalculatorInputProps = {
  min: string
  max: string
  value?: string
  stepSize: number
  onChange: (value: string) => void
  placeholder?: string
  mark?: string
  markLabel?: string
  label?: string
  tooltipText?: string
  id?: string
}

const CalculatorInput = ({
  min,
  max,
  value,
  stepSize,
  onChange,
  mark,
  markLabel,
  label,
  id: idProp,
}: CalculatorInputProps) => {
  const id = useId()
  const valueAsNumber = Number(value)
  const onValueChange = useCallback(
    ({ value }: any) => {
      onChange(`${value}`)
    },
    [onChange]
  )
  const onSliderChange = useCallback(
    (sliderValue: number | number[]) => onChange(`${sliderValue}`),
    [onChange]
  )
  const increaseValue = useCallback(() => {
    onChange(new Decimal(value ?? 0).add(stepSize).toString())
  }, [value, onChange, stepSize])
  const decreaseValue = useCallback(() => {
    onChange(Decimal.max(0, new Decimal(value ?? 0).sub(stepSize)).toString())
  }, [value, onChange, stepSize])

  const marks = useMemo(() => {
    if (!mark) {
      return undefined
    }
    return {
      [Decimal.max(min, Decimal.min(max, new Decimal(mark))).toString()]: {
        label: markLabel,
      },
    }
  }, [mark, markLabel])

  return (
    <div>
      <label htmlFor={idProp || id}>
        {label}
      </label>
      <div>
        <NumericFormat
          id={id}
          value={value}
          valueIsNumericString={true}
          thousandSeparator="'"
          decimalScale={0}
          allowNegative={false}
          onValueChange={onValueChange}
        />
        <button
          onClick={decreaseValue}
        >
          -
        </button>
        <button
          onClick={increaseValue}
        >
          +
        </button>

        <Slider
          onChange={onSliderChange}
          min={Number(min)}
          max={Number(max)}
          step={stepSize}
          marks={marks}
          value={valueAsNumber}
        />
      </div>
    </div>
  )
}

export default React.memo(CalculatorInput)
