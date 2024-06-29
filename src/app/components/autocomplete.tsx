import React from 'react';

import CreatableSelect from 'react-select/creatable';
export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export default function Autocomplete() {
  const colourOptions: readonly ColourOption[] = [
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  return (
    <CreatableSelect
      isClearable
      options={colourOptions}
      className="w-full"
      styles={{
        container: (base) => ({
          ...base,
          width: '100%',
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? '#C7E503' : '#C7E503',
          borderWidth: '3px',
          borderRadius: '10px',
          height: '91px',
          boxShadow: 'inset 0px 3px 10px #00000029;',
          fontSize: '24px',
          font: 'Poppins',
        }),
      }}
    />
  );
}
