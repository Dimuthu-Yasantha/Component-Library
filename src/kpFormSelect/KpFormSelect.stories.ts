import type { Meta, StoryObj } from '@storybook/react';
import { KpFormSelect } from './KpFormSelect';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/KpFormSelect',
  component: KpFormSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof KpFormSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    hasLabel: true,
    label: 'Label',
    placeholder: 'Select an option',
    // value: 1,
    hasHelperText: true,
    helperText: 'Helper Text',
    isMandatory: true,
    isMandatoryColor: "#C64343",
    onChange: ()=> {},
    disabled: false,
    error: false,
    data: ['Option 1', 'Option 2', 'Option 3'],
    withSearch: false,
    searchFieldPlaceholder: "Type to search..."
  },
};