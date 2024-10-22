import type { Meta, StoryObj } from "@storybook/react";
import { KpTabs, tabJsxElement, tabImageJSX } from "./KpTabs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/KpTabs",
  component: KpTabs,
  tags: ["autodocs"],
  argTypes: {
    tabsDataArray: {
      control: { type: "array" },
    },
  },
} satisfies Meta<typeof KpTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic_Tabs: Story = {
  args: {
    tabsDataArray: [
      {
        tabLable: "Tab 01",
        tabCode: "1",
        disabled: false,
        tabContent: tabJsxElement("tab content 01"),
        icons: tabImageJSX(),
      },
      {
        tabLable: "Tab 02",
        tabCode: "2",
        disabled: false,
        tabContent: tabJsxElement("tab content 02"),
      },
      {
        tabLable: "Tab 03",
        tabCode: "3",
        disabled: false,
        tabContent: tabJsxElement("tab content 03"),
      },
      {
        tabLable: "Tab 08",
        tabCode: "8",
        disabled: true,
        tabContent: tabJsxElement("tab content 08"),
      },
      {
        tabLable: "tab 09",
        tabCode: "9",
        disabled: true,
        tabContent: tabJsxElement("tab content 09"),
      },
    ],
    currentTab: "3",
  },
};
