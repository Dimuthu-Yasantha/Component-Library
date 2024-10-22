import React from "react";

import type { Meta, StoryObj } from '@storybook/react';
import { AccordionObject, KpAccordion } from './KpAccordion';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/KpAccordion',
  component: KpAccordion,
  tags: ['autodocs'],
} satisfies Meta<typeof KpAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    activeAccordionId: 2,
    accordionContent: [

      {
        id: 1,
        accordionTitle: 'first one',
        accordionContent: <div>
          <h2>Firt accordion title</h2>
          <p>This the content of the firt accordion. Content is JSX element.
            It is hard to change this from the storybook <span style={{ color: 'red' }}>accordionContent *</span>prop
          </p>
        </div>
      },
      {
        id: 2,
        accordionTitle: 'second one',
        accordionborderColor: 'red',
        accordionContent: <div>
          <h2>Second accordion title</h2>
          <p>This the content of the firt accordion. Content is JSX element.
            It is hard to change this from the storybook <span style={{ color: 'red' }}>accordionContent *</span>prop
          </p>
        </div>
      }
    ],
    boxShadow: 'none',
    border: 'none',
    borderRadius: '6',
    isExpandMoreLeft: true,
    onChange: (value: any) => {console.log(value)},
  },
};