import React from "react";
import "./Main.scss";
// @ts-ignore
import MainImage from "../../../assets/images/main.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main() {
  const navigate = useNavigate();
  const sellRate = 0.025;
  const seedMoney = 30000000;
  const buyPointRate = 0.005;

  const rateOfReturn = (
    highPoint: number,
    lowPoint: number,
    endPoint: number,
  ) => {
    const buyPoint = lowPoint * buyPointRate + lowPoint;
    const sellPoint = buyPoint * sellRate + buyPoint;
    const minuxSellpoint = ((buyPoint - endPoint) / buyPoint) * seedMoney;
    if (highPoint > sellPoint) {
      console.log(
        `seedMoney : ${seedMoney} 수익 : ${seedMoney * sellRate} 예수금 : ${seedMoney * sellRate + seedMoney}`,
      );
    } else {
      console.log(
        `종가 : ${endPoint} , 최고 도달 비율 : ${((highPoint - buyPoint) / buyPoint) * 100} 손실액 : ${seedMoney - minuxSellpoint}`,
      );
    }
  };

  // rateOfReturn(82.88, 81.61, 80.11);
  return (
    <div className={"main-body"} onClick={() => navigate("/order")}>
      <img className={"main-container"} src={MainImage} />
    </div>
  );
}
export default Main;
