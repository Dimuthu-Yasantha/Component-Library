import React from 'react';
import { render } from '@testing-library/react';
import { KpTooltip, sampleInnerComponent } from './KpTooltip';

describe('FormInput', () => {
 const props = {
    position: 'top',
    content: 'Tool tip',
    innerComponent: sampleInnerComponent()
 }

 it('should render successfully', () => {
    const {baseElement} = render(<KpTooltip {...props}/>);
    expect (baseElement).toBeTruthy();
 });
});