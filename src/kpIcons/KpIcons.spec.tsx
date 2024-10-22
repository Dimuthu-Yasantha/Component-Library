import React from 'react';
import { render } from '@testing-library/react';
import {ICONS} from './KpIcon';
import { Icon } from './KpIcon';

describe('KpuButton', () => {
 const props = {
   iconName:ICONS.ADD
 };

 it('should render successfully', () => {
    const {baseElement} = render(<Icon type={''} {...props}/>);
    expect (baseElement).toBeTruthy();
 });
});