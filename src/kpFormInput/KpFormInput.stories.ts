import type { Meta, StoryObj } from '@storybook/react';
import { KpFormInput } from './KpFromInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/KpFormInput',
  component: KpFormInput,
  tags: ['autodocs'],
  argTypes: {
    size:{
      options: ['small', 'medium'],
      control:{type: 'radio'}
    }
  },
} satisfies Meta<typeof KpFormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    hasLabel: true,
    label: 'Label',
    size: 'small',
    isMandatory: true,
    isMandatoryColor: '#C64343',
    hasIcon: true,
    hasHelperText: true,
    helperText: 'Helper text',
    hasCharCount: true,
    maxChars: 100,
    onClick: () => {},
    disabled: false,
    error: false,
    errorIcon: false,
    onChange: (value: any) => {console.log(value)},
    placeholder: 'Placeholder',
    isNumberInput: false,
    // defaultValue: 'Test value'
  },
};
