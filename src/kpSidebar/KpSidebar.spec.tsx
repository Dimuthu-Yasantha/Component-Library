import React from "react";
import { render } from "@testing-library/react";
import { KpSidebar } from "./KpSidebar";
import { ICONS, Icon, IconType } from "../kpIcons/KpIcon";

describe("KpSidebar", () => {
  const listItems = [
    {
      listIcon: (
        <Icon
          color="#1E2332"
          iconName={ICONS.SHIELDACCOUNT}
          iconSize={2}
          side="left"
          type={IconType.SVG}
        />
      ),
      listText: "Item Name",
      url: "/",
      active: true,
      id: 2
    },
  ];

  const props = {
    title: "Title",
    listItems: listItems,
    backGroundColor: "#F4F4F6",
    activeMenuColor: "#FFFFFF",
  };

  it("should render successfully", () => {
    const { baseElement } = render(<KpSidebar {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
