import React from 'react';
import { render } from '@testing-library/react';
import { KpFormSelect } from './KpFormSelect';

const data: Array<string> = []

describe('FormSelect', () => {
 const props = {
    label: 'Select an option',
    hasLabel: true,
    value: 0,
    hasHelperText: true,
    helperText: "Helper text",
    isMandatory: true,
    isMandatoryColor: "#C64343",
    onChange: (value: any) => {},
    disabled: false,
    error: false,
    data: data,
    withSearch: false,
    searchFieldPlaceholder: "Type to search..."
 }

 it('should render successfully', () => {
    const {baseElement} = render(<KpFormSelect placeholder={''} {...props}/>);
    expect (baseElement).toBeTruthy();
 });
});