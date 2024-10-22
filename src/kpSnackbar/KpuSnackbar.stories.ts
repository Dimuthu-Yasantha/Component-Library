import type { Meta, StoryObj } from '@storybook/react';

import { KpSnackbar } from './KpSnackbar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/KpSnackbar',
  component: KpSnackbar,
  tags: ['autodocs'],
} satisfies Meta<typeof KpSnackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic_Snackbar: Story = {
    args: {
        status:'success',
        title: 'Title',
        content: 'message',
        hasTitle: true,
        hasIcon: true,
        hasClose: true,
        duration: 6000000,
        verticalPlacement: 'top',
        horizontalPlacement: 'right'
    },
    argTypes: {
        status: { 
            options: ['success', 'info', 'error', 'warning' ],
            control: { type: "radio" }
        },
        verticalPlacement:{ 
            options: ['top', 'bottom'],
            control: { type: "radio" }
        },
        horizontalPlacement:{ 
            options: ['center', 'left', 'right' ],
            control: { type: "radio" }
        }
    }
};