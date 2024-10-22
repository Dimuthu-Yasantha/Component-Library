import type { Meta, StoryObj } from "@storybook/react";
import { KpFilter } from "./KpFilter";

const meta = {
  title: "Example/KpFilter",
  component: KpFilter,
  tags: ["autodocs"],
  argTypes: {
    filterData: [
      {
        section: "Loyalty customers",
        sectionData: [
          {
            label: "country",
            dataValues: ["Option 1", "Option 2", "Option 3"],
          },
          {
            label: "country",
            dataValues: ["Option 1", "Option 2", "Option 3"],
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof KpFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KpFilter_Data: Story = {
  args: {
    filterData: [
      {
        section: "Loyalty customers",
        sectionData: [
          {
            label: "country",
            dataValues: ["Canada", "USA", "AUE"],
          },
          {
            label: "Loyalty tiers",
            dataValues: ["Bronze 1", "Bronze 2", "Bronze 3"],
          },
          {
            label: "Segment 1",
            dataValues: ["Option 1", "Option 2", "Option 3"],
          },
        ],
      },
      {
        section: "Segment 2",
      },
    ],
    saveButtonLabel: "Apply",
    cancelButtonLabel: "clear",
  },
};
