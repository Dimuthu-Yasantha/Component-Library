import React from 'react';
import { render } from '@testing-library/react';
import {ButtonColor, KpModal, ModelTestFooterElement, ModelTestHeaderElement, TestJSXElementOne, TYPE, VARIANT} from "./KpModal";
import {ICONS} from "../kpIcons/KpIcon";

describe('Modal', () => {
    const props = {
        type: TYPE.DEFAULT,
        title: 'Title',
        content: TestJSXElementOne(),
        handleSubmit: () => {},
        submitBtnVariant: VARIANT.PRIMARY,
        submitBtnSize: "default",
        submitBtnColor: ButtonColor.PRIMARY,
        submitBtnHasLeftIcon: false,
        submitBtnLeftIcon: ICONS.ARROWRIGHT,
        submitBtnHasRightIcon: false,
        submitBtnRightIcon: null,
        submitBtnDisabled: false,
        cancelBtnVariant: VARIANT.PRIMARY,
        cancelBtnSize: "default",
        cancelBtnColor: ButtonColor.PRIMARY,
        cancelBtnHasLeftIcon: false,
        cancelBtnLeftIcon: null,
        cancelBtnHasRightIcon: false,
        cancelBtnRightIcon: null,
        cancelBtnDisabled: false,
        cancelBtnText: "Cancel",
        submitBtnText: "Submit",
        isOpen: true,
        isFooterContent: true,
        footerContent: ModelTestFooterElement(),
        isHeaderContent: true,
        headerContent: ModelTestHeaderElement(),
    }

    it('should render successfully', () => {
        const {baseElement} = render(<KpModal {...props}/>);
        expect (baseElement).toBeTruthy();
    });
});