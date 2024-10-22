import React from "react";
import { render } from "@testing-library/react";
import { IconType } from "../kpIcons/KpIcon";
import { ButtonColor, KpButton, VARIANT } from "./KpButton";

describe("KpuButton", () => {
  const props = {
    variant: VARIANT.PRIMARY,
    label: "Button",
    disabled: false,
    rightIconType: IconType.MUI,
    leftIconType: IconType.MUI,
    hasLeftIcon: false,
    hasRightIcon: false,
    buttonColor: ButtonColor.PRIMARY,
    customStyle: {},
  };

  it("should render successfully", () => {
    const { baseElement } = render(<KpButton {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
