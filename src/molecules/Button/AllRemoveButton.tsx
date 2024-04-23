import React from "react";
import "./AllRemoveButton.scss";

export type AllRemoveButtonProps = {
  onClick(): void;
};

function AllRemoveButton(allRemoveButtonProps: AllRemoveButtonProps) {
  return (
    <div className={"container"} onClick={allRemoveButtonProps.onClick}>
      <div className={"icon"}></div>
      <span className={"text"}>전체삭제</span>
    </div>
  );
}

export default AllRemoveButton;
