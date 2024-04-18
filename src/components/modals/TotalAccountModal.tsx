import React from "react";
import "./TotalAccountModal.scss";

function TotalAccountModal() {
  return (
    <div className={"total-account-container"}>
      <div className={"total-font-container"}>
        <span className={"total-font"}>합계</span>
        <span className={"total-font"}>64,000 원</span>
      </div>
    </div>
  );
}

export default TotalAccountModal;
