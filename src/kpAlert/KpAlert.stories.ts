import type { Meta, StoryObj } from '@storybook/react';

import { KpAlert } from './KpAlert';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/KpAlert',
  component: KpAlert,
  tags: ['autodocs'],
} satisfies Meta<typeof KpAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic_Alert: Story = {
    args: {
        status:'success',
        hasTitle: true,
        title: 'Title',
        content: 'message',
        hasIcon: true,
        hasClose: true,
    },
    argTypes: {
        status: { 
            options: ['success', 'info', 'error', 'warning' ],
            control: { type: "radio" }
        }
    }
};