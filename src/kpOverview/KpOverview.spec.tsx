import React from 'react';
import { render } from '@testing-library/react';
import { KpOverview } from './KpOverview';
import {ICONS, IconType} from '../kpIcons/KpIcon';

describe('FormSelect', () => {
 const props = {
    // type: '',
    stepper: false,
    title: 'Page title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nisi id rutrum sem vestibulum est. Sed erat morbi tristique nulla aliquam proin urna proin quam,',
    contentLength: 100,
    contentDismissible: 'Dismiss overview',
    navigationText: 'Go Back',
    navigationIcon: ICONS.ARROWLEFT,
    iconType: IconType.MUI,
    onNavPress: () => { console.log("Nav press") },
    withNavigation: true
 }

 it('should render successfully', () => {
    const {baseElement} = render(<KpOverview {...props}/>);
    expect (baseElement).toBeTruthy();
 });
});