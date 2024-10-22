import type { Meta, StoryObj } from '@storybook/react';
import { KpHeader, TabData, TestJSXElementOne, TestJSXElementTwo } from './KpHeader';
import { ICONS, IconType } from '../kpIcons/KpIcon';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/KpHeader',
  component: KpHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof KpHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

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

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
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
    isIconListShowing: false,
    settingsIconShow: false,
    helpIconShow: false,
    notificationIconShow: false,
    onHelp: () => { console.log('onHelp clicked') },
    onNotification: () => { console.log('onNotification clicked') },
    onSettings: () => { console.log('onSettings clicked') },
    platformSwitcherProps: {  sx: {marginRight: '150px'} },
    appOptionProps: {  sx: {marginRight: '100px'} },
    onTabClick: (id: number) => { console.log('id', id)},
    maxCountNotification: 10,
    dropdownMenuDisabled: false,
  }
};
