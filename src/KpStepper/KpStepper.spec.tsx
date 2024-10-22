import React from 'react';
import { render } from '@testing-library/react';
import {KpStepper} from "./KpStepper";

const steps = ['Step 1', 'Step 2', 'Step 3'];

describe('Stepper', () => {
    const props = {
        steps: steps,
        width: '300px',
        selectedStepperInnerPaddingTop: '10px',
        selectedStepperInnerPaddingBottom: '10px',
        backgroundColor: '#eaeaea',
        onBack: () => {console.log('onBack clicked')},
        onNext: () => {console.log('onNext clicked')},
        currentStep: 1,
    }

    it('should render successfully', () => {
        const {baseElement} = render(<KpStepper {...props}/>);
        expect (baseElement).toBeTruthy();
    });
});
