import type { Meta, StoryObj } from '@storybook/react';
import { KpOverview } from './KpOverview';
import {ICONS, IconType} from '../kpIcons/KpIcon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/KpOverview',
  component: KpOverview,
  argTypes: {
    navigationIcon:{
      options: [
        ICONS.GROUPOUTLINE,
        ICONS.ADDACCOUNT,
        ICONS.LOCKACCOUNT,
        ICONS.ADD,
        ICONS.ARROWBACK,
        ICONS.ARROWBACKIOS,
        ICONS.CREATEICON,
        ICONS.DELETE,
        ICONS.ATOM,
        ICONS.ARROWFORWARD,
        ICONS.ARROWFORWARDIOS,
        ICONS.ERROR,
        ICONS.ERROROUTLINE,
        ICONS.BELLHORNICON,
        ICONS.INVENTORY,
        ICONS.INVENTORYOUTLINE,
        ICONS.NOTIFICATIONOUTLINE,
        ICONS.REPORTGMAILERROR,
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
        ICONS.CLOCK,
        ICONS.CANCEL,
        ICONS.CANCELOUTLINE,
        ICONS.SETTINGSICON,
        ICONS.CREDITCARD,
        ICONS.DOTSHORIZOUTLINE,
        ICONS.DOTSVERTLINE,
        ICONS.DOWNLOADICON,
        ICONS.EMOCONFUSED,
        ICONS.EMOCRY,
        ICONS.EMOEXCITED,
        ICONS.EMOSATISFIED,
        ICONS.EMONEUTRAL,
        ICONS.VISIBILITY,
        ICONS.FILTEROUTLINE,
        ICONS.FINANCEOUTLINE,
        ICONS.GIFTCARD,
        ICONS.HANDSHAKE,
        ICONS.HELPCERCLE,
        ICONS.INFOOUTLINE,
        ICONS.SEARCHIOCN,
        ICONS.MENUOUTLINE,
        ICONS.REMOVEICON,
        ICONS.SHIELDACCOUNT,
        ICONS.STARICON,
        ICONS.STARICONPLUS,
        ICONS.TEXTBOXEDIT,
        ICONS.THUMBDOWN,
        ICONS.THUMBUP,
        ICONS.TRASHICON,
        ICONS.UNFOLDMORE,
        ICONS.UPLOADICON,
        ICONS.WINDOWCLOSE,
        ICONS.RELOADICON,
        ICONS.UNFOLDLESSICON
      ],
      control:{type: 'select'}
    }    
  },
  tags: ['autodocs']
} satisfies Meta<typeof KpOverview>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary_Default_Primary: Story = {
  args: {
    // type: '',
    stepper: false,
    title: 'Page title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nisi id rutrum sem vestibulum est. Sed erat morbi tristique nulla aliquam proin urna proin quam,',
    contentLength: 100,
    contentDismissible: 'Dismiss overview',
    navigationText: 'Go Back',
    iconType: IconType.MUI,
    navigationIcon: ICONS.ARROWLEFT,
    onNavPress: () => { console.log("Nav press") },
    withNavigation: true,
    showActionButton: false,
    actionBtnText: "Rename",

  },
};