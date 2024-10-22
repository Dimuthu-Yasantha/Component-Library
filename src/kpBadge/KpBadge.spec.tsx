import React from 'react';
import { render } from '@testing-library/react';
import { KpBadge, sampleInnerComponent } from './KpBadge';

describe('FormInput', () => {
 const props = {
    count: 10,
    maxCount: 17,
    vertical: 'top',
    horizontal: 'right',
    innerComponent: sampleInnerComponent(),
 }

 it('should render successfully', () => {
    const {baseElement} = render(<KpBadge {...props}/>);
    expect (baseElement).toBeTruthy();
 });
});