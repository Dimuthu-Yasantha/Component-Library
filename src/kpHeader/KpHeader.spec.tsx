import React from 'react';
import { render } from '@testing-library/react';
import { KpHeader, TabData, TestJSXElementOne, TestJSXElementTwo } from './KpHeader';
import { ICONS, IconType } from '../kpIcons/KpIcon';

const data: Array<TabData> = [
   {
      id: 0,
      status: 'Active',
      label: 'Tab Label'
  },
  {
      id: 1,
      status: 'Inactive',
      label: 'Tab Label'
  },
  {
      id: 2,
      status: 'Inactive',
      label: 'Tab Label'
  },
  {
      id: 3,
      status: 'Disabled',
      label: 'Tab Label'
  },
]

describe('Header', () => {
 const props = {
   tabs: data,
   productName: 'Access Manager',
   companyName: 'Client company',
   userName: 'Last name',
   userRole: 'Developer',
   hasNotification: true,
   notificationCount: 3,
   dropDownOpenIcon: ICONS.ARROWDOWN,
   dropDownCloseIcon: ICONS.ARROWUP,
   dropDownIconSize: 2,
   iconColor: '#666C7F',
   iconType: IconType.MUI,
   platformSwitcherContent: TestJSXElementOne(),
   appOptionContent: TestJSXElementTwo(),
   onHelp: () => { console.log('onHelp clicked') },
   onNotification: () => { console.log('onNotification clicked') },
   onSettings: () => { console.log('onSettings clicked') },
   platformSwitcherProps: {  sx: {marginRight: '150px'} },
   appOptionProps: {  sx: {marginRight: '100px'} },
   onTabClick: (id: number) => { console.log('id', id)},
   maxCountNotification: 10
 }

 it('should render successfully', () => {
    const {baseElement} = render(<KpHeader {...props}/>);
    expect (baseElement).toBeTruthy();
 });
});