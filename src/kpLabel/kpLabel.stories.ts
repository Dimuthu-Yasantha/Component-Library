import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconSide, IconType } from "../kpIcons/KpIcon";
import {KpLabel, STATUS, VARIANTS} from './kpLabel';
import {ICONS} from "../kpIcons/KpIcon";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/KpLabel',
    component: KpLabel,
    argTypes: {
        variant: {
            options: [VARIANTS.DEFAULT, VARIANTS.SECONDARY, VARIANTS.TERTIARY],
            control: { type: 'radio' },
        },
        status: {
            options: [STATUS.PRIMARY, STATUS.SECONDARY, STATUS.SUCCESS, STATUS.WARNING, STATUS.ERROR, STATUS.INFO, STATUS.DISABLED ],
            control: { type: "radio" }
        },
        icon:{
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
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof KpLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic_Label: Story = {
    args: {
        variant: VARIANTS.DEFAULT,
        status: STATUS.PRIMARY,
        content: 'sample text',
        hasIconStatus: false,
        leftIconType: IconType.MUI,
        icon: ICONS.THUMBUP,
        iconColor: '#ffff',
    },
};