import type { Meta, StoryObj } from "@storybook/react";
import { KpSidebar, listItem } from "./KpSidebar";
import { ICONS, Icon, IconType } from "../kpIcons/KpIcon";

import RestoreIcon from "@mui/icons-material/Restore";
import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AnalyticsIcon from "@mui/icons-material/Analytics";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
interface IMenuItem {
  id: string;
  title: string;
  isParent: boolean;
  link: string;
  isGroupItem: boolean;
  isGroupParent: boolean;
  isBackAllow: boolean;
  icon?: React.ReactNode;
  isCompletedStep?: boolean;
  isCurrentStep: boolean;
  hideText?: boolean;
  onHoverText?: boolean;
}

const subItemOne: listItem[] = [
  {
    id: 1,
    listIcon: (
      <Icon
        color="#666C7F"
        iconName={ICONS.SHIELDACCOUNT}
        iconSize={2}
        side="left"
        type={IconType.SVG}
      />
    ),
    listText: "Item Name",
    active: true,
    url: "/",
    group: {
      id: 1,
      groupName: "NEW CAMPAIGN",
      color: "#5FA562",
      groupItems: [
        { id: 1, content: "Objective 1", url: "/a" },
        { id: 2, content: "Objective 2", url: "/b" },
        { id: 3, content: "Objective 3", url: "/c" },
        { id: 4, content: "Objective 4", url: "/a" },
      ],
    },
  },
  {
    id: 2,
    listIcon: (
      <Icon
        color="#666C7F"
        iconName={ICONS.SHIELDACCOUNT}
        iconSize={2}
        side="left"
        type={IconType.SVG}
      />
    ),
    listText: "Item Name",
    url: "/",
  },
];

const subItemTwo: listItem[] = [
  {
    id: 3,
    listIcon: (
      <Icon
        color="#666C7F"
        iconName={ICONS.SHIELDACCOUNT}
        iconSize={2}
        side="left"
        type={IconType.SVG}
      />
    ),
    listText: "Item Name",
    url: "/",
  },
  {
    id: 4,
    listIcon: (
      <Icon
        color="#666C7F"
        iconName={ICONS.SHIELDACCOUNT}
        iconSize={2}
        side="left"
        type={IconType.SVG}
      />
    ),
    listText: "Item Name",
    url: "/",
  },
];

const listItems: listItem[] = [
  {
    id: 5,
    listIcon: (
      <Icon
        color="#666C7F"
        iconName={ICONS.SHIELDACCOUNT}
        iconSize={2}
        side="left"
        type={IconType.SVG}
      />
    ),
    listText: "Item Name",
    subItems: subItemOne,
  },

  {
    id: 6,
    listIcon: (
      <Icon
        color="#666C7F"
        iconName={ICONS.SHIELDACCOUNT}
        iconSize={2}
        side="left"
        type={IconType.SVG}
      />
    ),
    listText: "Item Name",
    subItems: subItemTwo,
  },
  {
    id: 7,
    listIcon: (
      <Icon
        color="#666C7F"
        iconName={ICONS.SHIELDACCOUNT}
        iconSize={2}
        side="left"
        type={IconType.SVG}
      />
    ),
    listText: "Item with group",
    url: "/item2",
    group: {
      id: 7,
      groupName: "NEW CAMPAIGN",
      color: "#5FA562",
      groupItems: [
        { id: 1, content: "Objective 1", url: "/a" },
        { id: 2, content: "Objective 2", url: "/a" },
        { id: 3, content: "Objective 3", url: "/a" },
        { id: 4, content: "Objective 4", url: "/a" },
      ],
    },
  },
  {
    id: 8,
    listIcon: (
      <Icon
        color="#666C7F"
        iconName={ICONS.SHIELDACCOUNT}
        iconSize={2}
        side="left"
        type={IconType.SVG}
      />
    ),
    listText: "Item Name",
    url: "/item3",
  },
  {
    id: 9,
    listIcon: (
      <Icon
        color="#666C7F"
        iconName={ICONS.SHIELDACCOUNT}
        iconSize={2}
        side="left"
        type={IconType.SVG}
      />
    ),
    listText: "Item Name",
    url: "/item4",
    active: true,
  },
];

const mainMenu: IMenuItem[] = [
  {
    id: "SUMMARY",
    title: "Summary",
    isParent: false,
    link: "/summary",
    isGroupItem: false,
    isGroupParent: false,
    icon: <RestoreIcon />,
    isBackAllow: false,
    isCurrentStep: false,
  },
  {
    id: "ACTIVATION_MENU",
    title: "Activation",
    isParent: true,
    link: "/activation/campaigns ",
    isGroupItem: false,
    isGroupParent: false,
    icon: <CampaignIcon />,
    isBackAllow: false,
    isCurrentStep: false,
  },
  {
    id: "ANALYTICS_MENU",
    title: "Analytics",
    isParent: true,
    link: "/analytics",
    isGroupItem: false,
    isGroupParent: false,
    icon: <AnalyticsIcon />,
    isBackAllow: false,
    isCurrentStep: false,
  },
];

const activationMenu: IMenuItem[] = [
  {
    id: "MAIN_MENU",
    title: "Activation",
    isParent: true,
    link: "/summary",
    isGroupItem: false,
    isGroupParent: false,
    isBackAllow: true,
    icon: <ArrowBackIcon />,
    isCurrentStep: false,
  },
  {
    id: "CAMPAIGNS",
    title: "Campaigns",
    isParent: false,
    link: "/activation/campaigns",
    isGroupItem: false,
    isGroupParent: false,
    isBackAllow: false,
    isCurrentStep: false,
  },
  {
    id: "CAMP_BUILD_MENU",
    title: "Build",
    isParent: true,
    link: "/activation/build/objective",
    isGroupItem: false,
    isGroupParent: true,
    isBackAllow: false,
    isCurrentStep: false,
  },
];

const campBuildMenu: IMenuItem[] = [
  {
    id: "ACTIVATION_MENU",
    title: "Build",
    isParent: true,
    link: "/activation/campaigns",
    isGroupItem: false,
    isGroupParent: true,
    isBackAllow: true,
    icon: <ArrowBackIcon />,
    isCurrentStep: false,
  },
  {
    id: "OBJECTIVE",
    title: "Objective",
    isParent: false,
    link: "/objective",
    isGroupItem: true,
    isGroupParent: false,
    isBackAllow: false,
    isCompletedStep: false,
    isCurrentStep: false,
  },
  {
    id: "PARAMETERS",
    title: "Parameters",
    isParent: false,
    link: "/parameters",
    isGroupItem: true,
    isGroupParent: false,
    isBackAllow: false,
    isCompletedStep: false,
    isCurrentStep: false,
  },
  {
    id: "CONTENT",
    title: "Content",
    isParent: false,
    link: "/content",
    isGroupItem: true,
    isGroupParent: false,
    isBackAllow: false,
    isCompletedStep: false,
    isCurrentStep: false,
  },
  {
    id: "SUBMIT",
    title: "Submit",
    isParent: false,
    link: "/submit",
    isGroupItem: true,
    isGroupParent: false,
    isBackAllow: false,
    isCompletedStep: false,
    isCurrentStep: false,
  },
];

const audienceBuildMenu: IMenuItem[] = [
  {
    id: "AUDIENCE_BUILD_MENU",
    title: "Create audience",
    isParent: true,
    link: "/activation/build/parameters/helpers/audiences",
    isGroupItem: false,
    isGroupParent: true,
    isBackAllow: true,
    icon: <ArrowBackIcon />,
    isCurrentStep: false,
  },
  {
    id: "AUDIENCE_BUILD_FILTERS",
    title: "Filters",
    isParent: false,
    link: "/campaign/audiences/segment/helpers/filters",
    isGroupItem: true,
    isGroupParent: false,
    isBackAllow: false,
    isCompletedStep: false,
    isCurrentStep: false,
  },
  {
    id: "AUDIENCE_BUILD_REVIEW",
    title: "Review",
    isParent: false,
    link: "/campaign/audiences/segment/helpers/review",
    isGroupItem: true,
    isGroupParent: false,
    isBackAllow: false,
    isCompletedStep: false,
    isCurrentStep: false,
  },
];

const productSegmentBuildMenu: IMenuItem[] = [
  {
    id: "PRODUCT_SEGMENT_BUILD_MENU",
    title: "Product segment",
    isParent: true,
    link: "/activation/build/parameters/helpers/products",
    isGroupItem: false,
    isGroupParent: true,
    isBackAllow: true,
    icon: <ArrowBackIcon />,
    isCurrentStep: false,
  },
  {
    id: "PRODUCT_BUILD_FILTERS",
    title: "Filters",
    isParent: false,
    link: "/campaign/product/segment/helpers/filters",
    isGroupItem: true,
    isGroupParent: false,
    isBackAllow: false,
    isCompletedStep: false,
    isCurrentStep: false,
  },
  {
    id: "PRODUCT_BUILD_REVIEW",
    title: "Review",
    isParent: false,
    link: "/campaign/product/segment/helpers/review",
    isGroupItem: true,
    isGroupParent: false,
    isBackAllow: false,
    isCompletedStep: false,
    isCurrentStep: false,
  },
];

const anaylticsMenu: IMenuItem[] = [
  {
    id: "MAIN_MENU",
    title: "Analytics",
    isParent: true,
    link: "/summary",
    isGroupItem: false,
    isGroupParent: false,
    isBackAllow: true,
    icon: <ArrowBackIcon />,
    isCurrentStep: false,
  },
  {
    id: "ANALYTICS_CAMPS",
    title: "Campaigns",
    isParent: false,
    link: "/analytics",
    isGroupItem: false,
    isGroupParent: false,
    isBackAllow: false,
    isCurrentStep: false,
  },
  {
    id: "OVERVIEW",
    title: "Overview",
    isParent: false,
    link: "/analytics/overview",
    isGroupItem: false,
    isGroupParent: false,
    isBackAllow: false,
    isCurrentStep: false,
  },
  {
    id: "ATTRIBUTION",
    title: "Attribution",
    isParent: false,
    link: "/analytics/attribution",
    isGroupItem: false,
    isGroupParent: false,
    isBackAllow: false,
    isCurrentStep: false,
  },
  {
    id: "SPLIT_TEST",
    title: "Split test",
    isParent: false,
    link: "/analytics/split-test",
    isGroupItem: false,
    isGroupParent: false,
    isBackAllow: false,
    isCurrentStep: false,
  },
];

const menusList = {
  MAIN_MENU: mainMenu,
  ACTIVATION_MENU: activationMenu,
  CAMP_BUILD_MENU: campBuildMenu,
  PRODUCT_SEGMENT_BUILD_MENU: productSegmentBuildMenu,
  AUDIENCE_BUILD_MENU: audienceBuildMenu,
  ANALYTICS_MENU: anaylticsMenu,
};

const meta = {
  title: "Example/KpSidebar",
  component: KpSidebar,
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof KpSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const onRouteChange = (path: string, setMenu : Dispatch<SetStateAction<IMenuItem[] | undefined>>) => {
  switch (path) {
    case "/summary":
      menusList.MAIN_MENU[0].isCurrentStep = true;
      setMenu(menusList.MAIN_MENU);
      break;
    case "/activation/campaigns":
      menusList.ACTIVATION_MENU[1].isCurrentStep = true;
      setMenu(menusList.ACTIVATION_MENU);
      break;
    case "/activation/build/objective":
      const clonedCampBuildMenu = [...menusList.CAMP_BUILD_MENU];
      clonedCampBuildMenu[1].isCurrentStep = true;
      clonedCampBuildMenu[2].isCurrentStep = false;
      clonedCampBuildMenu[3].isCurrentStep = false;
      clonedCampBuildMenu[4].isCurrentStep = false;

      clonedCampBuildMenu[1].isCompletedStep = false;
      clonedCampBuildMenu[2].isCompletedStep = false;
      clonedCampBuildMenu[3].isCompletedStep = false;
      clonedCampBuildMenu[4].isCompletedStep = false;

      setMenu(clonedCampBuildMenu);
      break;
    case "/activation/build/parameters":
    case "/activation/build/parameters/helpers/audiences":
    case "/activation/build/parameters/helpers/products":
      const clonedCampBuildMenu2 = [...menusList.CAMP_BUILD_MENU];
      clonedCampBuildMenu2[1].isCurrentStep = false;
      clonedCampBuildMenu2[2].isCurrentStep = true;
      clonedCampBuildMenu2[3].isCurrentStep = false;
      clonedCampBuildMenu2[4].isCurrentStep = false;

      clonedCampBuildMenu2[1].isCompletedStep = true;
      clonedCampBuildMenu2[2].isCompletedStep = false;
      clonedCampBuildMenu2[3].isCompletedStep = false;
      clonedCampBuildMenu2[4].isCompletedStep = false;
      setMenu(clonedCampBuildMenu2);
      break;
    case "/activation/build/content":
      const clonedCampBuildMenu3 = [...menusList.CAMP_BUILD_MENU];
      clonedCampBuildMenu3[1].isCurrentStep = false;
      clonedCampBuildMenu3[2].isCurrentStep = false;
      clonedCampBuildMenu3[3].isCurrentStep = true;
      clonedCampBuildMenu3[4].isCurrentStep = false;

      clonedCampBuildMenu3[1].isCompletedStep = true;
      clonedCampBuildMenu3[2].isCompletedStep = true;
      clonedCampBuildMenu3[3].isCompletedStep = false;
      clonedCampBuildMenu3[4].isCompletedStep = false;

      setMenu(clonedCampBuildMenu3);
      break;
    case "/activation/build/submit":
      const clonedCampBuildMenu4 = [...menusList.CAMP_BUILD_MENU];
      clonedCampBuildMenu4[1].isCurrentStep = false;
      clonedCampBuildMenu4[2].isCurrentStep = false;
      clonedCampBuildMenu4[3].isCurrentStep = false;
      clonedCampBuildMenu4[4].isCurrentStep = true;

      clonedCampBuildMenu4[1].isCompletedStep = true;
      clonedCampBuildMenu4[2].isCompletedStep = true;
      clonedCampBuildMenu4[3].isCompletedStep = true;
      clonedCampBuildMenu4[4].isCompletedStep = true;

      setMenu(clonedCampBuildMenu4);
      break;
    case "/campaign/audiences/segment/helpers/filters":
      const clonedAudienceBuildMenu = [...menusList.AUDIENCE_BUILD_MENU];
      clonedAudienceBuildMenu[1].isCurrentStep = true;
      clonedAudienceBuildMenu[2].isCurrentStep = false;

      clonedAudienceBuildMenu[1].isCompletedStep = false;
      clonedAudienceBuildMenu[2].isCompletedStep = false;

      setMenu(clonedAudienceBuildMenu);
      break;
    case "/campaign/audiences/segment/helpers/review":
      const clonedAudienceBuildMenu2 = [...menusList.AUDIENCE_BUILD_MENU];
      clonedAudienceBuildMenu2[1].isCurrentStep = false;
      clonedAudienceBuildMenu2[2].isCurrentStep = true;

      clonedAudienceBuildMenu2[1].isCompletedStep = true;
      clonedAudienceBuildMenu2[2].isCompletedStep = true;

      setMenu(clonedAudienceBuildMenu2);
      break;
    case "/campaign/product/segment/helpers/filters":
      const clonedProductBuildMenu = [
        ...menusList.PRODUCT_SEGMENT_BUILD_MENU,
      ];
      clonedProductBuildMenu[1].isCurrentStep = true;
      clonedProductBuildMenu[2].isCurrentStep = false;

      clonedProductBuildMenu[1].isCompletedStep = false;
      clonedProductBuildMenu[2].isCompletedStep = false;
      setMenu(clonedProductBuildMenu);
      break;
    case "/campaign/product/segment/helpers/review":
      const clonedProductBuildMenu2 = [
        ...menusList.PRODUCT_SEGMENT_BUILD_MENU,
      ];
      clonedProductBuildMenu2[1].isCurrentStep = false;
      clonedProductBuildMenu2[2].isCurrentStep = true;

      clonedProductBuildMenu2[1].isCompletedStep = true;
      clonedProductBuildMenu2[2].isCompletedStep = true;

      setMenu(clonedProductBuildMenu2);
      break;
    case "/analytics":
      const clonedAnalyticsMenu1 = [...menusList.ANALYTICS_MENU];
      clonedAnalyticsMenu1[1].isCurrentStep = true;
      clonedAnalyticsMenu1[2].isCurrentStep = false;
      clonedAnalyticsMenu1[3].isCurrentStep = false;
      clonedAnalyticsMenu1[4].isCurrentStep = false;
      setMenu(clonedAnalyticsMenu1);
      break;
    case "/analytics/overview":
      const clonedAnalyticsMenu2 = [...menusList.ANALYTICS_MENU];
      clonedAnalyticsMenu2[1].isCurrentStep = false;
      clonedAnalyticsMenu2[2].isCurrentStep = true;
      clonedAnalyticsMenu2[3].isCurrentStep = false;
      clonedAnalyticsMenu2[4].isCurrentStep = false;
      setMenu(clonedAnalyticsMenu2);
      break;
    case "/analytics/attribution":
      const clonedAnalyticsMenu3 = [...menusList.ANALYTICS_MENU];
      clonedAnalyticsMenu3[1].isCurrentStep = false;
      clonedAnalyticsMenu3[2].isCurrentStep = false;
      clonedAnalyticsMenu3[3].isCurrentStep = true;
      clonedAnalyticsMenu3[4].isCurrentStep = false;
      setMenu(clonedAnalyticsMenu3);
      break;
    case "/analytics/split-test":
      const clonedAnalyticsMenu4 = [...menusList.ANALYTICS_MENU];
      clonedAnalyticsMenu4[1].isCurrentStep = false;
      clonedAnalyticsMenu4[2].isCurrentStep = false;
      clonedAnalyticsMenu4[3].isCurrentStep = false;
      clonedAnalyticsMenu4[4].isCurrentStep = true;
      setMenu(clonedAnalyticsMenu4);
      break;
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic_SideBar: Story = {
  args: {
    title: "Title",
    listItems: listItems,
    // backGroundColor: "#F4F4F6",
    activeMenuColor: "#FFFFFF",
    footer: (
      <p>
        <b>Kognitiv Portal</b> v2022.1
        <br /> Displayed Timezone GMT -05:00)
        <br /> Eastern Time (US and Canada)
      </p>
    ),
    sidebarHeight: "500px",
    onClick: (id: number) => {
      console.log("id", id);
    },
    currentRoute: "/summary",
    isMenuSideBar: false,
    onMenuRouteChange(path, setMenu) {
      onRouteChange(path,setMenu)
    },
    preventCollapseOnSelect: false,
    hideText:false,
    onHoverText: false,
  },
};
