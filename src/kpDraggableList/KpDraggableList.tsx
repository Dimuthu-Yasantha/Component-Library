// DraggableList.tsx
import React, { useEffect, useRef, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./KpDraggableList.css";

export interface draggableListItem {
  fieldId: string | number;
  fieldName: string;
  content: any;
  visible: boolean;
  fieldOrder: number;
}
export interface DraggableListProps {
  /**
   * An array of items to be displayed and made draggable within the list.
   */
  items: draggableListItem[];

  /**
   * Callback for internal state changes.
   */
  onOrderChange: (newState: any[]) => void;

  /**
   * Enable visibility feature where the user can toggle isVisible field.
   */
  enableVisibility: boolean;
  /**
   * Disable user interaction
   */
  disabled?: boolean;
}

export const KpDraggableList = ({
  items,
  onOrderChange,
  enableVisibility,
  disabled,
  ...props
}: DraggableListProps) => {
  const [listItems, setListItems] = useState<draggableListItem[]>(
    items.sort((a, b) => a.fieldOrder - b.fieldOrder)
  );
  const [previousStateLastItem, setPreviousStateLastItem] =
    useState<draggableListItem>(listItems[listItems.length - 1]);
  const [previousStateLastItemVisibility, setLastItemVisibility] =
    useState<boolean>(listItems[listItems.length - 1].visible);
  const [isDragging, setIsDragging] = useState<number>();
  const containerRef = useRef<any>();
  const container = containerRef.current;
  const wrapper = document.querySelector<HTMLElement>(
    ".draggable-list-container"
  );
  const parentWrapper = wrapper?.parentNode as HTMLElement;
  useEffect(() => {
    const lastItem = listItems[listItems.length - 1];
    if (previousStateLastItemVisibility !== lastItem.visible) {
      parentWrapper.scrollTop = parentWrapper.scrollHeight;
      setLastItemVisibility(lastItem.visible);
    }
    setPreviousStateLastItem(lastItem);
  }, [listItems, previousStateLastItem]);

  const dragStart = (e: React.PointerEvent<HTMLLIElement>, index: number) => {
    if (!detectLeftButton(e)) return;
    setIsDragging(index);

    const items = [...container?.childNodes];
    const dragItem = items[index];
    const itemsBelowDragItem = items.slice(index + 1);
    const notDragItems = items.filter((_, i) => i != index);
    const dragData = listItems[index];
    let newData: any[];

    // This is applicable only for the storybook demo example.
    const child = document.querySelector<HTMLElement>(
      ".innerZoomElementWrapper"
    );
    const dragBoundingRect = dragItem.getBoundingClientRect();

    //distance between two cards
    const space =
      items[1].getBoundingClientRect().top -
      items[0].getBoundingClientRect().bottom;

    dragItem.style.position = "fixed";
    dragItem.style.zIndex = 5000;
    dragItem.style.width = dragBoundingRect.width + "px";
    dragItem.style.height = dragBoundingRect.height + "px";
    if (!child) {
      dragItem.style.top = dragBoundingRect.top + "px";
      dragItem.style.bottom = dragBoundingRect.bottom + "px";
    }
    dragItem.style.cursor = "grabbing";

    const div = document.createElement("div");
    div.id = "div-temp";
    div.style.width = dragBoundingRect.width + "px";
    container.appendChild(div);

    //move the elements below dragItem
    //distance to be moved
    const distance = dragBoundingRect.height + space;

    itemsBelowDragItem.forEach((item) => {
      item.style.transform = `translateY(${distance}px)`;
    });

    //get the original coordinates of the mouse pointer
    const x = e.clientX;
    const y = e.clientY;

    //perform the function on hover
    document.onpointermove = dragMove;

    function dragMove(e: { clientX: number; clientY: number }) {
      //calculate the distance the mouse pointer has traveled.
      //Original coordinates minus current coordinates.

      const posX = e.clientX - x;
      const posY = e.clientY - y;

      //Move item
      dragItem.style.transform = `translate(${posX}px, ${posY}px)`;
      dragItem.style.cursor = "grabbing";

      //swap position and data
      notDragItems.forEach((item) => {
        //Check two elements are overlapping
        const rect1 = dragItem.getBoundingClientRect();
        const rect2 = item.getBoundingClientRect();

        const isOverlapping =
          rect1.y < rect2.y + rect2.height / 2 &&
          rect1.y + rect1.height / 2 > rect2.y;
        const minScrollLimit = parentWrapper.scrollHeight / 2;
        const maxScrollLimit = parentWrapper.clientHeight;

        // Auto scroll the parent container when elements dragged in to both top and bottom edges.
        if (rect1.y > maxScrollLimit) {
          parentWrapper.scrollTop += 1;
        } else if (rect1.y < minScrollLimit) {
          parentWrapper.scrollTop -= 1;
        }
        if (isOverlapping) {
          if (item.getAttribute("style")) {
            item.style.transform = "";
            index++;
          } else {
            item.style.transform = `translateY(${distance}px)`;
            index--;
          }

          //swap data
          newData = listItems.filter(
            (item: { fieldId: any }) => item.fieldId !== dragData.fieldId
          );
          newData.splice(index, 0, dragData);
          newData = newData.map((item, newIndex) => ({
            ...item,
            fieldOrder: newIndex,
          }));
        }
      });
    }

    //finish onpointer event
    document.onpointerup = dragEnd;

    // Handle end of the drag event
    function dragEnd() {
      document.onpointerup = null;
      document.onpointermove = null;
      setIsDragging(undefined);
      dragItem.style.top = dragBoundingRect.top + "px";
      dragItem.style.bottom = dragBoundingRect.bottom + "px";
      dragItem.style = "";
      container.removeChild(div);

      items.forEach((item) => (item.style = ""));
      if (newData !== undefined) {
        setListItems(newData);
        onOrderChange(newData);
      }
    }
  };
  const detectLeftButton = (
    e: React.PointerEvent<HTMLLIElement> | Event | undefined | any
  ) => {
    e = e || window.event;
    if ("buttons" in e) {
      return e.buttons === 1;
    }

    const button = e.which || e.button;
    return button === 1;
  };
  //Toggle the state of the view button
  const toggleVisibility = (index: number) => {
    const updatedItems = [...listItems];
    updatedItems[index].visible = !updatedItems[index].visible;
    setListItems(updatedItems);
    onOrderChange(updatedItems);
  };
  function generateListItemClassName(isDragging: boolean, isVisible: boolean) {
    const classNames = ["draggable-list-item"];
    if (isDragging) {
      classNames.push("dragging");
    }

    if (enableVisibility && typeof isVisible !== undefined && !isVisible) {
      classNames.push("disabled");
    }

    return classNames.join(" ");
  }
  return (
    <div
      className="draggable-list-container"
      ref={containerRef}
      style={{
        pointerEvents: disabled ? "none" : "unset",
      }}
    >
      {listItems.map(
        (item: draggableListItem, index: number) =>
          // Filter out undefined index values
          index !== undefined && (
            <div>
              <ListItem
                onMouseDown={(e: any) => dragStart(e, index)}
                key={item.fieldId}
                className={generateListItemClassName(
                  isDragging === index,
                  item.visible
                )}
              >
                <DragIndicatorIcon className="draggable-list-item-button-drag" />
                <ListItemText
                  primary={item.content}
                  className="draggable-list-item-text"
                />
                {enableVisibility ? (
                  item.visible ? (
                    <VisibilityIcon
                      className="draggable-list-item-button-view"
                      onClick={() => toggleVisibility(index)}
                    />
                  ) : (
                    <VisibilityOffIcon
                      className="draggable-list-item-button-view"
                      onClick={() => toggleVisibility(index)}
                    />
                  )
                ) : null}
              </ListItem>
            </div>
          )
      )}
    </div>
  );
};
