import type { Meta, StoryObj } from "@storybook/react";
import { KpDraggableList } from "./KpDraggableList";

const meta = {
  title: "Example/KpDraggableList",
  component: KpDraggableList,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof KpDraggableList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        fieldId: 1,
        fieldName: "salutation",
        content: "Salutation",
        visible: true,
        fieldOrder: 3,
      },
      {
        fieldId: 2,
        fieldName: "firstName",
        content: "First Name",
        visible: false,
        fieldOrder: 1,
      },
      {
        fieldId: 3,
        fieldName: "lastName",
        content: "Last name",
        visible: false,
        fieldOrder: 4,
      },
      {
        fieldId: 4,
        fieldName: "accountId",
        content: "Account ID",
        visible: true,
        fieldOrder: 7,
      },
      {
        fieldId: 5,
        fieldName: "dateOfBirth",
        content: "Date of birth",
        visible: true,
        fieldOrder: 2,
      },
      {
        fieldId: 6,
        fieldName: "age",
        content: "Age",
        visible: true,
        fieldOrder: 5,
      },
      {
        fieldId: 7,
        fieldName: "gender",
        content: "Gender",
        visible: true,
        fieldOrder: 0,
      },
      {
        fieldId: 8,
        fieldName: "address",
        content: "Address",
        visible: true,
        fieldOrder: 6,
      },
      {
        fieldId: 9,
        fieldName: "country",
        content: "Country",
        visible: true,
        fieldOrder: 8,
      },
      {
        fieldId: 10,
        fieldName: "email",
        content: "Email",
        visible: true,
        fieldOrder: 9,
      },
      {
        fieldId: 11,
        fieldName: "phone",
        content: "Phone",
        visible: true,
        fieldOrder: 10,
      },
      {
        fieldId: 12,
        fieldName: "longevity",
        content: "Longevity",
        visible: true,
        fieldOrder: 11,
      },
    ],
    enableVisibility: true,
    disabled: false,
  },
};
