import type { Meta, StoryObj } from '@storybook/react';

import { KpLogo } from './KpLogo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/KpLogo',
  component: KpLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof KpLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const main_logo: Story = {
    args: {
        color:'Blue',
        width: 1165,
        height: 345
    },
    argTypes: {
        color: { 
            options: ['Blue', 'White'],
            control: { type: "radio" }
        }
    }
};