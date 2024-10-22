import React from 'react';
import { render } from '@testing-library/react';
import {KpAccordion} from './KpAccordion';

const data: Array<string> = []

export interface AccordionObject {
    content: string;
    objectContent?: string;
    accordionSubContent?: AccordionObject[];
}

const accordionContent: AccordionObject[] = [
    {
        content: "Accordion Item 1",
        objectContent: "Content for Item 1",
    },
    {
        content: "Accordion Item 2",
        objectContent: "Content for Item 2",
        accordionSubContent: [
            {
                content: "Sub Item 1",
                objectContent: "Content for Sub Item 1",
            },
            {
                content: "Sub Item 2",
                objectContent: "Content for Sub Item 2",
            },
        ],
    },
    {
        content: "Accordion Item 3",
        objectContent: "Content for Item 3",
    },
];

describe('FormSelect', () => {
 const props = {
     accordionContent: accordionContent,
     boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)',
     border: '1px solid #ddd',
     // value: 1,
     backgroundColor: 'red',
 }

 it('should render successfully', () => {
    const {baseElement} = render(<KpAccordion {...props}/>);
    expect (baseElement).toBeTruthy();
 });
});