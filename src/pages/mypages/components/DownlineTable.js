import React, { useEffect, useState } from "react";

import {
    CardTitle,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

import {
    DataTableBody,
    DataTableHead,
    DataTableItem,
    DataTableRow,
    Icon,
} from "../../../components/Component";

const transactionData = [
    {
        order: 1,
        userId: "anitasaini",
        name: "ANITA SAINI",
        level: 1,
        downlineIds: "2",
        downlineActive: "0",
        status: "active",
        rank: "1",
        activeOn: "2022-08-21",
        joinOn: "2022-08-21"


    },
    {
        order: 2,
        userId: "Kamal339",
        name: "KAMAL@NAGAR",
        level: 1,
        downlineIds: "46",
        downlineActive: "42",
        status: "active",
        rank: "7",
        activeOn: "2022-08-21",
        joinOn: "2022-08-21"


    },
    {
        order: 3,
        userId: "Anu123",
        name: "ANITA GUJER",
        level: 1,
        downlineIds: "2",
        downlineActive: "0",
        status: "active",
        rank: "1",
        activeOn: "2022-08-21",
        joinOn: "2022-08-21"


    },
    {
        order: 4,
        userId: "Dinesh",
        name: "DINESH KHORWAL",
        level: 1,
        downlineIds: "1247",
        downlineActive: "893",
        status: "active",
        rank: "7",
        activeOn: "2022-08-21",
        joinOn: "2022-08-21"


    },
    {
        order: 5,
        userId: "BIT555",
        name: "NISAR AHMED",
        level: 1,
        downlineIds: "22498",
        downlineActive: "18556",
        status: "active",
        rank: "7",
        activeOn: "2022-08-21",
        joinOn: "2022-08-21"


    },
    {
        order: 6,
        userId: "Vikash123",
        name: "VIKASH NAGAR",
        level: 1,
        downlineIds: "113",
        downlineActive: "100",
        status: "active",
        rank: "7",
        activeOn: "2022-08-21",
        joinOn: "2022-08-21"


    }
    ,{
        order: 7,
        userId: "MISSYOU007",
        name: "SHAKUR MOHAMMAD",
        level: 1,
        downlineIds: "3413",
        downlineActive: "2785",
        status: "active",
        rank: "1",
        activeOn: "2022-08-21",
        joinOn: "2022-08-21"


    }
    ,{
        order: 8,
        userId: "anitasaini",
        name: "ANITA SAINI",
        level: 1,
        downlineIds: "2",
        downlineActive: "0",
        status: "active",
        rank: "1",
        activeOn: "2022-08-21",
        joinOn: "2022-08-21"


    },{
        order: 9,
        userId: "anitasaini",
        name: "ANITA SAINI",
        level: 1,
        downlineIds: "2",
        downlineActive: "0",
        status: "active",
        rank: "1",
        activeOn: "2022-08-21",
        joinOn: "2022-08-21"


    },{
        order: 10,
        userId: "anitasaini",
        name: "ANITA SAINI",
        level: 1,
        downlineIds: "2",
        downlineActive: "0",
        status: "active",
        rank: "1",
        activeOn: "2022-08-21",
        joinOn: "2022-08-21"


    }
]

const DownlineTable = () => {
    const [data, setData] = useState(transactionData);
    const [trans, setTrans] = useState("");

    useEffect(() => {
        let filteredData;
        if (trans === "Due") {
            filteredData = transactionData.filter((item) => item.status === "active");
        } else if (trans === "Paid") {
            filteredData = transactionData.filter((item) => item.status === "inactive");
        } else {
            filteredData = transactionData;
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
            <div className="card-inner">
                <div className="card-title-group">
                    <CardTitle>
                        <h6 className="title">
                            <span className="mr-2">Users</span>{" "}
                            
                        </h6>
                    </CardTitle>
                    <div className="card-tools">
                        <ul className="card-tools-nav">
                            <li className={trans === "Paid" ? "active" : ""} onClick={() => setTrans("Paid")}>
                                <a
                                    href="#paid"
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                    }}
                                >
                                    <span>Active</span>
                                </a>
                            </li>
                            <li className={trans === "Due" ? "active" : ""} onClick={() => setTrans("Due")}>
                                <a
                                    href="#pending"
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                    }}
                                >
                                    <span>Inactive</span>
                                </a>
                            </li>
                            <li className={trans === "" ? "active" : ""} onClick={() => setTrans("")}>
                                <a
                                    href="#all"
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                    }}
                                >
                                    <span>All</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <DataTableBody className="border-top" bodyclass="nk-tb-orders">
                <DataTableHead>
                    <DataTableRow>
                        <span>#</span>
                    </DataTableRow>
                    <DataTableRow size="sm">
                        <span>User ID</span>
                    </DataTableRow>
                    <DataTableRow size="md">
                        <span>Name</span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                        <span>Level</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span>Downline IDs</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span>Downline Active</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span className="d-none d-sm-inline">Status</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span className="d-none d-sm-inline">Rank</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span className="d-none d-sm-inline">Active On</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span className="d-none d-sm-inline">Join On</span>
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
                                    <a href="#sr">{item.order}</a>
                                </span>
                            </DataTableRow>

                            <DataTableRow size="md">
                                <span className="tb-sub">{item.userId}</span>
                            </DataTableRow>
                            <DataTableRow size="lg">
                                <span className="tb-sub text-primary">{item.name}</span>
                            </DataTableRow>
                            <DataTableRow>
                                <span className="tb-sub tb-amount">
                                    {item.level}
                                </span>
                            </DataTableRow>
                            <DataTableRow>
                                <span className="tb-sub tb-amount">
                                    {item.downlineIds}
                                </span>
                            </DataTableRow>
                            <DataTableRow>
                                <span className="tb-sub tb-amount">
                                    {item.downlineActive}
                                </span>
                            </DataTableRow>
                            <DataTableRow>
                                <span
                                    className={`badge badge-dot badge-dot-xs badge-${item.status === "active" ? "success" : item.status === "inactive" ? "warning" : "danger"
                                        }`}
                                >
                                    {item.status}
                                </span>
                            </DataTableRow>
                            <DataTableRow>
                                <span className="tb-sub tb-amount">
                                    {item.rank}
                                </span>
                            </DataTableRow>
                            <DataTableRow>
                                <span className="tb-sub tb-amount">
                                    {item.activeOn}
                                </span>
                            </DataTableRow>
                            <DataTableRow>
                                <span className="tb-sub tb-amount">
                                    {item.joinOn}
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
export default DownlineTable;
