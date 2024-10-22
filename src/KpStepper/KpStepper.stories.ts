import type { Meta, StoryObj } from '@storybook/react';
import {KpStepper} from "./KpStepper";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/KpStepper',
    component: KpStepper,
    tags: ['autodocs'],
} satisfies Meta<typeof KpStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
    {
        id: 0,
        label: "Step 1",
    },
    {
        id: 1,
        label: "Step 2",
    },
    {
        id: 2,
        label: "Step 3",
    },
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        steps: steps,
        width: '200px',
        selectedStepperInnerPaddingTop: '10px',
        selectedStepperInnerPaddingBottom: '10px',
        backgroundColor: '#666C7F',
        onBack: () => {console.log('onBack clicked')},
        onNext: () => {console.log('onNext clicked')},
        currentStep: 1,
    }
};
