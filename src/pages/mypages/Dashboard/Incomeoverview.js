import React, { useEffect } from "react";
import { PreviewAltCard } from "../../../components/Component";



const Incomeoverview = () => {

    useEffect(() => {

    }, []);

    return (
        <PreviewAltCard className="card-full" bodyClass="d-flex flex-column h-100">
            <div className="card-title">
                <h6 className="title">My Income Status</h6>
            </div>
            <ul className="data-list is-compact m-0">
                <li className="data-item">
                    <div className="data-col justify-content-between">
                        <div className="data-label">
                            Sponsor Income</div>
                        <div className="data-value">{"$ 1525.00"}</div>
                    </div>
                </li>
                <li className="data-item">
                    <div className="data-col justify-content-between">
                        <div className="data-label">Level Income</div>
                        <div className="data-value">{"$ 34332.25"}</div>
                    </div>
                </li>
                <li className="data-item">
                    <div className="data-col justify-content-between">
                        <div className="data-label">Team Promotion Income</div>
                        <div className="data-value">$ 27975.00</div>
                    </div>
                </li>
                <li className="data-item">
                    <div className="data-col justify-content-between">
                        <div className="data-label">Boosting Income</div>
                        <div className="data-value">$ 132372.00
                        </div>
                    </div>
                </li>
                <li className="data-item">
                    <div className="data-col justify-content-between">
                        <div className="data-label">Autopool Income</div>
                        <div className="data-value">$ 2088.00</div>
                    </div>
                </li>
                <li className="data-item">
                    <div className="data-col justify-content-between">
                        <div className="data-label">Reward Income</div>
                        <div className="data-value">$ 67400.00</div>
                    </div>
                </li>
            </ul>
        </PreviewAltCard>
    );
};
export default Incomeoverview;
