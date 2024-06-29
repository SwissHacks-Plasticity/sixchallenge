import React from 'react';
import companies = require('../data/companies.json')

import CreatableSelect from 'react-select/creatable';
import { Company } from '@/app/data/types';
export interface CompanyOption {
  readonly value: Company;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

interface Props {
  onChange: (company: Company)=> void
}

export default function Autocomplete({onChange}: Props) {
  const companyOptions: readonly CompanyOption[] = companies.map(company => ({
    value: company, label: company.name
  }));
  return (
    <CreatableSelect
      isClearable
      options={companyOptions}
      onChange={(val)=> onChange(val.value)}
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
