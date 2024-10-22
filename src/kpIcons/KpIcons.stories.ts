import type { Meta, StoryObj } from "@storybook/react";
import { ICONS, Icon, IconSide, IconType } from "./KpIcon";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/KpIcons",
  component: Icon,
  argTypes: {
    iconName: {
      options: [
        ICONS.GROUPOUTLINE,
        ICONS.ADD,
        ICONS.ARROWBACK,
        ICONS.ARROWBACKIOS,
        ICONS.CREATEICON,
        ICONS.DELETE,
        ICONS.ARROWFORWARD,
        ICONS.ARROWFORWARDIOS,
        ICONS.ERROR,
        ICONS.ERROROUTLINE,
        ICONS.INVENTORY,
        ICONS.INVENTORYOUTLINE,
        ICONS.NOTIFICATIONOUTLINE,
        ICONS.REPORTGMAILERROR,
        ICONS.RESETICON,
        ICONS.WARNINGAMBER,
        ICONS.INVENTORY,
        ICONS.INVENTORYOUTLINE,
        ICONS.INVITATION,
        ICONS.CANCELICON,
        ICONS.CHECK,
        ICONS.CHECKOUTLINE,
        ICONS.CHECKCIRCLE,
        ICONS.DOUBLEARROWLEFT,
        ICONS.DOUBLEARROWRIGHT,
        ICONS.ARROWDOWN,
        ICONS.ARROWTOP,
        ICONS.ARROWLEFT,
        ICONS.ARROWRIGHT,
        ICONS.ARROWUP,
        ICONS.CIRCLE,
        ICONS.CANCEL,
        ICONS.CANCELOUTLINE,
        ICONS.SETTINGSICON,
        ICONS.CREDITCARD,
        ICONS.DOTSHORIZOUTLINE,
        ICONS.DOTSVERTLINE,
        ICONS.DOWNLOADICON,
        ICONS.EMOEXCITED,
        ICONS.EMOSATISFIED,
        ICONS.EMONEUTRAL,
        ICONS.VISIBILITY,
        ICONS.GIFTCARD,
        ICONS.HELPCERCLE,
        ICONS.INFOOUTLINE,
        ICONS.SEARCHIOCN,
        ICONS.MENUOUTLINE,
        ICONS.REMOVEICON,
        ICONS.STARICON,
        ICONS.STARICONPLUS,
        ICONS.THUMBDOWN,
        ICONS.THUMBUP,
        ICONS.UNFOLDMORE,
        ICONS.UPLOADICON,
        ICONS.WINDOWCLOSE,
        ICONS.UNFOLDLESSICON,
        ICONS.ATOM,
        ICONS.CLOCK,
        ICONS.EMOCONFUSED,
        ICONS.EMOCRY,
        ICONS.FILTEROUTLINE,
        ICONS.FINANCEOUTLINE,
        ICONS.HANDSHAKE,
        ICONS.SHIELDACCOUNT,
        ICONS.TEXTBOXEDIT,
        ICONS.TRASHICON,
        ICONS.RELOADICON,
        ICONS.ADDACCOUNT,
        ICONS.LOCKACCOUNT,
        ICONS.BELLHORNICON,
        ICONS.CHEVRONLEFT,
        ICONS.CHEVRONRIGHT,
        ICONS.SUMMARY,
        ICONS.ANALYTICS,
        ICONS.BULLHORN,
        ICONS.USERLOCK,
        ICONS.IGNITE,
        ICONS.PULSE,
        ICONS.AMPLIFY,
        ICONS.REPORTING,
        ICONS.PLATFORMFACEBOOK,
        ICONS.PLATFORMBING,
        ICONS.PLATFORMGOOGLEADS,
        ICONS.INSPIRE,
        ICONS.KPIICONS,
        ICONS.CUSTOMERTRENDS,
        ICONS.CUSTOMERFLOWS,
        ICONS.DIAGNOSE,
        ICONS.SCHEDULER,
      ],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

const metas = {
  title: "Example/KpIcons",
  component: Icon,
  argTypes: {
    iconName: {
      options: [
        ICONS.ATOM
      ],
      control: { type: "select" },
    },
    type: {
        options:[IconType.MUI, IconType.SVG],
        control:{type: 'radio'}
      }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
const ttt = IconType.MUI?meta: metas;
type Story = StoryObj<typeof ttt>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic_Icons: Story = {
  args: {
    type: IconType.MUI,
    iconName: ICONS.ADD,
    iconSize: 2,
    side: IconSide.LEFtSIDE,
    color: "#666C7F"
  },
};