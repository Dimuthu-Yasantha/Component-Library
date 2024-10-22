import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@mui/material';
import {COLOR, customBtn, KpTable} from './KpTable';
import { IFilterData } from './TableHeaderComponent';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/KpTable',
    component: KpTable,
    tags: ['autodocs'],
} satisfies Meta<typeof KpTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic_Table: Story = {
    args: {
        tableTitle: 'Table title',
        totalNumberOfData: 9,
        rows: [{ id: 1, name: 'dhanana', age: 28, htmlTag: <Chip sx={{ borderRadius: '4px', color: '#4387C6', background: '#ECF3F9' }} label="Pending approval" /> },
        { id: 2, name: 'Chamal', age: 28, htmlTag: <Chip sx={{ borderRadius: '4px', color: '#EA9B42', background: '#FDF5EC' }} label="Revision requested"/>, customButtons: customBtn() },
        { id: 3, name: 'Kamal', age: 33, htmlTag: <Chip sx={{ borderRadius: '4px', color: '#5FA562', background: '#EFF6EF' }} label="Active" /> },
        { id: 4, name: 'Sandun', age: 29, htmlTag: <Chip sx={{ borderRadius: '4px', color: ' #C64343', background: '#F9ECEC' }} label="Declined" /> },
        { id: 5, name: 'Daham', age: 30, htmlTag: <Chip sx={{ borderRadius: '4px', color: '#4387C6', background: '#ECF3F9' }} label="Pending approval" /> },
        { id: 6, name: 'Sampath', age: 31, htmlTag: <Chip sx={{ borderRadius: '4px', color: '#4387C6', background: '#ECF3F9' }} label="Pending approval" /> },
        { id: 7, name: 'Sameera', age: 32, htmlTag: <Chip sx={{ borderRadius: '4px', color: '#4387C6', background: '#ECF3F9' }} label="Pending approval" /> },
        { id: 8, name: 'Kanchana', age: 28, htmlTag: <Chip sx={{ borderRadius: '4px', color: '#4387C6', background: '#ECF3F9' }} label="Pending approval" /> },
        { id: 9, name: 'Deva', age: 39, htmlTag: <Chip sx={{ borderRadius: '4px', color: '#4387C6', background: '#ECF3F9' }} label="Pending approval" /> }],
        tableHeaders: [{ id: '1', label: 'Header 1' }, { id: '2', label: 'Header 2' }, { id: '3', label: 'Header 3' }, { id: '4', label: 'Header 4' }],
        isViewAllow: true,
        isEditAllow: true,
        isCustomIconsAllowed: false,
        isDeleteAllow: true,
        isMenuAllow: true,
        rowsPerPage: 6,
        rowsPerPageOptions: [3, 6, 9],
        order: 'asc',
        orderBy: '1',
        maxHeight: 400,
        onPageNumberChange: Function,
        maxHeight: 400,
        tableSelection: false,
        allowMultiSelect: false,
        hideIdColumn: false,
        selectedList: [{ id: 1, name: 'dhanana', age: 28}, { id: 2, name: 'Chamal', age: 28}],
        selectionColor: COLOR.DEFAULT,
        isFilterEnabled: true,
        maxTableDataWidth: 100,
        filterValues: [
            {
                id: 1,
                type: 'CHECK_BOX',
                value: 'seasonality',
                name: 'Seasonality',
                isChecked: false
            },
            {
                id: 2,
                type: 'CHECK_BOX',
                value: 'dateModified',
                name: 'Date modified',
                isChecked: false
            },
            {
                id: 3,
                type: 'DROP_DOWN',
                name: 'Product',
                isChecked: false,
                value: [
                    'Select an option',
                    'Option 1',
                    'Option 2',
                    'Option 3'
                ],
                selectedValue: 'Select an option',
            },
            {
                id: 4,
                type: 'CHECK_BOX',
                value: 'offerType',
                name: 'Offer type',
                isChecked: false
            },

        ],
        onSortData: (value: string, isAsc: boolean) => { console.log("sort item", value, "Asc", isAsc)},
    },
    argTypes: {
        selectionColor: {
            options: [COLOR.PRIMARY, COLOR.SECONDARY, COLOR.INFO, COLOR.DEFAULT, COLOR.ERROR, COLOR.WARNING, COLOR.SUCCESS],
            control: { type: 'radio' },
        },
        onFilterApply: (x: IFilterData[]) => { console.log('filter data', x) }
    }
};