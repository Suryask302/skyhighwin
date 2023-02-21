import React from "react";
import { PreviewAltCard } from "../../../components/Component";

const Walletstatus = () => {
  
    return (
        <PreviewAltCard className="card-full" bodyClass="d-flex flex-column h-100">
            <div className="card-title-group mb-3">
                <div className="card-title">
                    <h6 className="title" >Wallet Balance Status</h6>
                </div>
            </div>

            <ul className="data-list is-compact m-0">
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
        </PreviewAltCard>
    );
};
export default Walletstatus;
