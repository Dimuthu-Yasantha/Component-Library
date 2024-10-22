import React from 'react';
import { render } from '@testing-library/react';
import { KpFormInput } from './KpFromInput';

describe('FormInput', () => {
 const props = {
  hasLabel: true,
  label: 'Label',
  size: 'small',
  isMandatory: true,
  hasIcon: true,
  hasHelperText: true,
  helperText: 'Helper text',
  hasCharCount: true,
  maxChars: 100,
  onClick: () => {},
  disabled: false,
  error: false,
  errorIcon: false,
  onChange: (value: any) => {console.log(value)},
  defaultValue: 'Test value',
  placeholder: 'Placeholder'
 }

 it('should render successfully', () => {
    const {baseElement} = render(<KpFormInput {...props}/>);
    expect (baseElement).toBeTruthy();
 });
});