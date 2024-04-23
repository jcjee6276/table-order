import React from "react";
import "./TotalAccountModal.scss";

export type TotalAccountProps = {
  totalPrice: number;
};

function TotalAccountModal(totalAccountProps: TotalAccountProps) {
  return (
    <div className={"total-account-container"}>
      <div className={"total-font-container"}>
        <span className={"total-font"}>합계</span>
        <span className={"total-font"}>{totalAccountProps.totalPrice} 원</span>
      </div>
    </div>
  );
}

export default TotalAccountModal;
