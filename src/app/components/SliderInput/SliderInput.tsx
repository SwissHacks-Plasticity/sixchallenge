import React, { useCallback, useId, useMemo } from 'react';
import Decimal from 'decimal.js';
import { NumericFormat } from 'react-number-format';
import Slider from 'rc-slider';
import './SliderInput.css';
import Handle from 'rc-slider/lib/Handles/Handle';
import { TonneIcon } from '../TonneIcon/TonneIcon';
import { throttle } from 'throttle-debounce';

type CalculatorInputProps = {
  min: string;
  max: string;
  value?: string;
  stepSize: number;
  onChange: (value: string) => void;
  placeholder?: string;
  mark?: string;
  markLabel?: string;
  label?: string;
  tooltipText?: string;
  id?: string;
  hideInputNumber?: boolean;
  hideSlider?: boolean;
  disabled?: boolean;
};

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
  hideInputNumber = false,
  hideSlider = false,
  disabled = false,
}: CalculatorInputProps) => {
  const id = useId();
  const valueAsNumber = Number(value);
  const onValueChange = useCallback(
    ({ value }: any) => {
      onChange(`${value}`);
    },
    [onChange]
  );
  const onSliderChange = useCallback(
    (sliderValue: number | number[]) => throttle(50, () => onChange(`${sliderValue}`)),
    [onChange]
  );
  const increaseValue = useCallback(() => {
    onChange(new Decimal(value ?? 0).add(stepSize).toString());
  }, [value, onChange, stepSize]);
  const decreaseValue = useCallback(() => {
    onChange(Decimal.max(0, new Decimal(value ?? 0).sub(stepSize)).toString());
  }, [value, onChange, stepSize]);

  const marks = useMemo(() => {
    if (!mark) {
      return undefined;
    }
    return {
      [Decimal.max(min, Decimal.min(max, new Decimal(mark))).toString()]: {
        label: markLabel,
      },
    };
  }, [mark, markLabel]);

  return (
    <div className='w-full'>
      <label htmlFor={idProp || id} className="font-semibold text-l">
        {label}
      </label>
      <div>
        {!hideInputNumber && (
          <div className="p-2 relative bg-white flex flex-row border-4 border-bordergreen rounded-lg text-blue font-bold text-xl">
            <div className="w-14 mr-2">
              <TonneIcon />
            </div>
            <NumericFormat
              id={id}
              value={value}
              valueIsNumericString={true}
              thousandSeparator="'"
              decimalScale={0}
              allowNegative={false}
              onValueChange={onValueChange}
              className="pt-1 w-full outline-0"
            />
            <div className="flex flex-row text-2xl font-semibold">
              <button className="px-3" onClick={decreaseValue}>
                -
              </button>
              <button className="px-3 border-bordergreen border-l-4" onClick={increaseValue}>
                +
              </button>
            </div>
          </div>
        )}

        {!hideSlider && (
          <Slider
            className="my-2"
            onChange={onSliderChange}
            min={Number(min)}
            max={Number(max)}
            step={stepSize}
            marks={marks}
            value={valueAsNumber}
            disabled={disabled}
            handleRender={(handleRenderProps: any) => (
              <Handle {...(handleRenderProps?.props ?? {})}>
                <img src="/Turtle_02.png" className="pointer-events-none" />
              </Handle>
            )}
            styles={{
              rail: {
                background: '#ffffff',
                height: '8px',
              },
              track: {
                background: '#4242d2',
                height: '8px',
              },
              handle: {
                background: 'unset',
                width: '50px',
                height: '50px',
                border: 'none',
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(CalculatorInput);
