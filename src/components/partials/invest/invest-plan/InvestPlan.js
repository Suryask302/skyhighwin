import React, { useEffect, useState } from "react";
import Icon from "../../../icon/Icon";
import { Progress, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from "reactstrap";
import { PreviewAltCard } from "../../../preview/Preview";
import { PurchasePlanChart } from "../../charts/invest/InvestChart";
import { investData, investDataSet2, investDataSet3, investDataSet4 } from "./InvestData";

const InvestPlan = () => {
  const [planSet, setPlanSet] = useState("30");
  const [data, setData] = useState(investData);

  useEffect(() => {
    let newData;
    if (planSet === "7") {
      newData = investDataSet2;
    } else if (planSet === "15") {
      newData = investDataSet3;
    } else {
      newData = investDataSet4;
    }
    setData(newData);
  }, [planSet]);

  return (
    <PreviewAltCard className="card-full" bodyClass="d-flex flex-column h-100">
      <div className="card-title-group mb-3">
        <div className="card-title">
          <h6 className="title">Wallet Balance Status</h6>
        </div>
      </div>

      <ul className="data-list is-compact">
        <li className="data-item">
          <div className="data-col justify-content-between">
            <div className="data-label">
            Withdrawal Wallet Balance</div>
            <div className="data-value">{"$ 1525.00"}</div>
          </div>
        </li>
        <li className="data-item">
          <div className="data-col justify-content-between">
            <div className="data-label">Pool Wallet (Hold)</div>
            <div className="data-value">{"$ 34332.25"}</div>
          </div>
        </li>
        <li className="data-item">
          <div className="data-col justify-content-between">
            <div className="data-label">Fund Wallet Balance</div>
            <div className="data-value">$ 27975.00</div>
          </div>
        </li>
        <li className="data-item">
          <div className="data-col justify-content-between">
            <div className="data-label">Booster Wallet Balance</div>
            <div className="data-value">$ 132372.00
            </div>
          </div>
        </li>
        <li className="data-item">
          <div className="data-col justify-content-between">
            <div className="data-label">Total Income	</div>
            <div className="data-value">$ 2088.00</div>
          </div>
        </li>
        <li className="data-item">
          <div className="data-col justify-content-between">
            <div className="data-label">Total Withdrawal</div>
            <div className="data-value">$ 67400.00</div>
          </div>
        </li>
      </ul>
      <div className="invest-top-ck mt-auto">
        <PurchasePlanChart set={planSet} />
      </div>
    </PreviewAltCard>
  );
};
export default InvestPlan;
