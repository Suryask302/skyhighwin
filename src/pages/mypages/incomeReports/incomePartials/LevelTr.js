import React, { useEffect, useState } from "react";
import { Icon } from "../../../../components/Component";
import { levelData } from "./TransactionData.js";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { DataTableHead, DataTableRow, DataTableItem, DataTableBody } from "../../../../components/Component";

const LevelTr = () => {
    const [data, setData] = useState(levelData);
    const [trans] = useState("");

    useEffect(() => {
        let filteredData;
        if (trans === "Due") {
            filteredData = levelData.filter((item) => item.status === "Due");
        } else if (trans === "Paid") {
            filteredData = levelData.filter((item) => item.status === "Paid");
        } else {
            filteredData = levelData;
        }
        setData(filteredData);
    }, [trans]);


    const DropdownTrans = () => {
        return (
            <UncontrolledDropdown>
                <DropdownToggle tag="a" className="text-soft dropdown-toggle btn btn-icon btn-trigger">
                    <Icon name="more-h"></Icon>
                </DropdownToggle>
                <DropdownMenu right>
                    <ul className="link-list-plain">
                        <li>
                            <DropdownItem
                                tag="a"
                                href="#view"
                                onClick={(ev) => {
                                    ev.preventDefault();
                                }}
                            >
                                View
                            </DropdownItem>
                        </li>
                        <li>
                            <DropdownItem
                                tag="a"
                                href="#invoice"
                                onClick={(ev) => {
                                    ev.preventDefault();
                                }}
                            >
                                Invoice
                            </DropdownItem>
                        </li>
                        <li>
                            <DropdownItem
                                tag="a"
                                href="#print"
                                onClick={(ev) => {
                                    ev.preventDefault();
                                }}
                            >
                                Print
                            </DropdownItem>
                        </li>
                    </ul>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    };
    return (
        <React.Fragment>
            <DataTableBody className="border-top" bodyclass="nk-tb-orders" style={{ overflow: "auto" }}>
                <DataTableHead>
                    <DataTableRow>
                        <span>#</span>
                    </DataTableRow>
                    <DataTableRow >
                        <span>Referral ID</span>
                    </DataTableRow>
                    <DataTableRow >
                        <span>pool</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span>Level</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span>Level Bonus</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span>Date</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span>&nbsp;</span>
                    </DataTableRow>
                </DataTableHead>
                {data.map((item, idx) => {
                    return (
                        <DataTableItem key={idx}>
                            <DataTableRow>
                                <span className="tb-lead">
                                    <a href="#order">{item.order}</a>
                                </span>
                            </DataTableRow>

                            <DataTableRow >
                                <span className="tb-sub">{item.refid}</span>
                            </DataTableRow>
                            <DataTableRow>
                                <span className="tb-sub text-primary">{item.pool}</span>
                            </DataTableRow>
                            <DataTableRow>
                                <span className="tb-sub tb-amount">
                                    {item.level}
                                </span>
                            </DataTableRow>
                            <DataTableRow>
                                <span className="tb-sub tb-amount">
                                    {item.levelBonus}
                                </span>
                            </DataTableRow>
                            <DataTableRow>
                                <span className="tb-sub tb-amount">
                                    {item.date}
                                </span>
                            </DataTableRow>

                            <DataTableRow className="nk-tb-col-action">
                                <DropdownTrans />
                            </DataTableRow>
                        </DataTableItem>
                    );
                })}
            </DataTableBody>
        </React.Fragment>
    );
};
export default LevelTr;
