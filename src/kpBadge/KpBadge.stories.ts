import type { Meta, StoryObj } from '@storybook/react';
import { KpBadge, sampleInnerComponent } from './KpBadge';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/KpBadge',
    component: KpBadge,
    tags: ['autodocs'],
} satisfies Meta<typeof KpBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic_Badge: Story = {
    args: {
        type: 'standard',
        value: 8,
        color: '#EA421A',
        maxCount: 9,
        vertical: 'top',
        horizontal: 'right',
        innerComponent: sampleInnerComponent()
    },
    argTypes: {
        value: { control: 'number', if: { arg: 'type' , eq : 'standard' } },
        maxCount: { control: 'number', if: { arg: 'type' ,  eq : 'standard'} },
        type:{
            options: ['dot', 'standard' ],
            control: { type: "select" }
        },
        vertical: {
            options: ['top', 'bottom' ],
            control: { type: "radio" }
        },
        horizontal: {
            options: [ 'left', 'right'],
            control: { type: "radio" }
        }
    }
};
