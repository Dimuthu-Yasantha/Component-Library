import type { Meta, StoryObj } from '@storybook/react';
import { KpTooltip, sampleInnerTooltipComponent } from './KpTooltip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/KpTooltip',
  component: KpTooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof KpTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic_Tooltip: Story = {
    args: {
        position: 'right',
        content: 'Tooltip message',
        innerComponent: sampleInnerTooltipComponent()
    },
    argTypes: {
        position: { 
            options : ['top' , 'bottom' , 'left' , 'right' ],
            control: { type: "radio" }
        }
    }
};