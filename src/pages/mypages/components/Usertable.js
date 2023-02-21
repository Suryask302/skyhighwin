import React, { useEffect, useState } from "react";
import Head from "../../../layout/head/Head";
import {
    DropdownMenu,
    DropdownToggle,

    UncontrolledDropdown,
    DropdownItem,
} from "reactstrap";
import {
    Icon,
    PaginationComponent,
    Button,
    DataTable,
    DataTableBody,
    DataTableHead,
    DataTableRow,
    DataTableItem,
    RSelect,
} from "../../../components/Component";
import { bulkActionOptions } from "../../../utils/Utils";
import { Link } from "react-router-dom";

import axios from "axios";


const Usertable = () => {

    const [data, setData] = useState([]);
    const [tablesm, updateTableSm] = useState(false);
    const [onSearch, setonSearch] = useState(true);
    const [onSearchText, setSearchText] = useState("");

    const [actionText, setActionText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(10);
    const [sort, setSortState] = useState("");

    // Sorting data
    const sortFunc = (params) => {

        let defaultData = data

        if (params === "asc") {
            let sortedData = defaultData.sort((a, b) => a.name.localeCompare(b.name));
            setData([...sortedData])

        } else if (params === "dsc") {
            let sortedData = defaultData.sort((a, b) => b.name.localeCompare(a.name));
            setData([...sortedData]);
        }

    }

    useEffect(() => {

        (async () => {
            let resp = await axios.post("https://skyhigh.onrender.com/skyhigh/fetchRef", { custId: 5796845 })
            setData(resp['data']['data'])
        })()

    }, [])


    // function to set the action to be taken in table header
    const onActionText = (e) => {
        setActionText(e.value);
    };

    // onChange function for searching name
    const onFilterChange = (e) => {
        setSearchText(e.target.value);
    };

    // function to toggle the search option
    const toggle = () => setonSearch(!onSearch);

    // Get current list, pagination
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <React.Fragment>
            <Head title="User List - Regular"></Head>
            <DataTable className="card-stretch">
                <div className="card-inner position-relative card-tools-toggle">
                    <div className="card-title-group">
                        <div className="card-tools">
                            <div className="form-inline flex-nowrap gx-3">
                                <div className="form-wrap">
                                    <RSelect
                                        options={bulkActionOptions}
                                        className="w-130px"
                                        placeholder="Select Level"
                                        onChange={(e) => onActionText(e)}
                                    />
                                </div>
                                <div className="btn-wrap">
                                    <span className="d-none d-md-block">
                                        <Button
                                            disabled={actionText !== "" ? false : true}
                                            color="light"
                                            outline
                                            className="btn-dim"

                                        >
                                            Apply
                                        </Button>
                                    </span>
                                    <span className="d-md-none">
                                        <Button
                                            color="light"
                                            outline
                                            disabled={actionText !== "" ? false : true}
                                            className="btn-dim btn-icon"

                                        >
                                            <Icon name="arrow-right"></Icon>
                                        </Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-tools mr-n1">
                            <ul className="btn-toolbar gx-1">
                                <li>
                                    <a
                                        href="#search"
                                        onClick={(ev) => {
                                            ev.preventDefault();
                                            toggle();
                                        }}
                                        className="btn btn-icon search-toggle toggle-search"
                                    >
                                        <Icon name="search"></Icon>
                                    </a>
                                </li>
                                <li className="btn-toolbar-sep"></li>
                                <li>
                                    <div className="toggle-wrap">
                                        <Button
                                            className={`btn-icon btn-trigger toggle ${tablesm ? "active" : ""}`}
                                            onClick={() => updateTableSm(true)}
                                        >
                                            <Icon name="menu-right"></Icon>
                                        </Button>
                                        <div className={`toggle-content ${tablesm ? "content-active" : ""}`}>
                                            <ul className="btn-toolbar gx-1">
                                                <li className="toggle-close">
                                                    <Button className="btn-icon btn-trigger toggle" onClick={() => updateTableSm(false)}>
                                                        <Icon name="arrow-left"></Icon>
                                                    </Button>
                                                </li>

                                                <li>
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle color="tranparent" className="btn btn-trigger btn-icon dropdown-toggle">
                                                            <Icon name="setting"></Icon>
                                                        </DropdownToggle>
                                                        <DropdownMenu right className="dropdown-menu-xs">
                                                            <ul className="link-check">
                                                                <li>
                                                                    <span>Show</span>
                                                                </li>
                                                                <li className={itemPerPage === 10 ? "active" : ""}>
                                                                    <DropdownItem
                                                                        tag="a"
                                                                        href="#dropdownitem"
                                                                        onClick={(ev) => {
                                                                            ev.preventDefault();
                                                                            setItemPerPage(10);
                                                                        }}
                                                                    >
                                                                        10
                                                                    </DropdownItem>
                                                                </li>
                                                                <li className={itemPerPage === 15 ? "active" : ""}>
                                                                    <DropdownItem
                                                                        tag="a"
                                                                        href="#dropdownitem"
                                                                        onClick={(ev) => {
                                                                            ev.preventDefault();
                                                                            setItemPerPage(15);
                                                                        }}
                                                                    >
                                                                        15
                                                                    </DropdownItem>
                                                                </li>
                                                            </ul>
                                                            <ul className="link-check">
                                                                <li>
                                                                    <span>Order</span>
                                                                </li>
                                                                <li className={sort === "dsc" ? "active" : ""}>
                                                                    <DropdownItem
                                                                        tag="a"
                                                                        href="#dropdownitem"
                                                                        onClick={(ev) => {
                                                                            ev.preventDefault();
                                                                            setSortState("dsc");
                                                                            sortFunc("dsc");
                                                                        }}
                                                                    >
                                                                        DESC
                                                                    </DropdownItem>
                                                                </li>
                                                                <li className={sort === "asc" ? "active" : ""}>
                                                                    <DropdownItem
                                                                        tag="a"
                                                                        href="#dropdownitem"
                                                                        onClick={(ev) => {
                                                                            ev.preventDefault();
                                                                            setSortState("asc");
                                                                            sortFunc("asc");
                                                                        }}
                                                                    >
                                                                        ASC
                                                                    </DropdownItem>
                                                                </li>
                                                            </ul>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`card-search search-wrap ${!onSearch && "active"}`}>
                        <div className="card-body">
                            <div className="search-content">
                                <Button
                                    className="search-back btn-icon toggle-search active"
                                    onClick={() => {
                                        setSearchText("");
                                        toggle();
                                    }}
                                >
                                    <Icon name="arrow-left"></Icon>
                                </Button>
                                <input
                                    type="text"
                                    className="border-transparent form-focus-none form-control"
                                    placeholder="Search by user or email"
                                    value={onSearchText}
                                    onChange={(e) => onFilterChange(e)}
                                />
                                <Button className="search-submit btn-icon">
                                    <Icon name="search"></Icon>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <DataTableBody>
                    <DataTableHead>
                        <DataTableRow>
                            <span className="fw-bold">#SrNo</span>
                        </DataTableRow>
                        <DataTableRow size="mb">
                            <span className="fw-bold">Member Id</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                            <span className="fw-bold">Username</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                            <span className="fw-bold">Mobile</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                            <span className="fw-bold">RankStage</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                            <span className="fw-bold">Status</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                            <span className="fw-bold">Joining Date</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                            <span className="fw-bold">Active Date</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                            <span className="fw-bold">RankName</span>
                        </DataTableRow>
                    </DataTableHead>
                    {/*Head*/}
                    {data
                        ? data.map((item, i) => {
                            return (
                                <DataTableItem key={item['CusID']}>

                                    <DataTableRow>
                                        <Link to={`${process.env.PUBLIC_URL}/user-details-regular/${item.CusID}`}>
                                            <div className="user-card">
                                                <div className="user-info">
                                                    <span className="tb-lead">
                                                        {i + 1}{" "}
                                                        <span
                                                            className={`dot dot-${item.Status === "Active"
                                                                ? "success"
                                                                : item.status === "Pending"
                                                                    ? "warning"
                                                                    : "danger"
                                                                } d-md-none ml-1`}
                                                        ></span>
                                                    </span>
                                                    {/* <span>{item.Cust_Name}</span> */}
                                                </div>
                                            </div>
                                        </Link>
                                    </DataTableRow>
                                    <DataTableRow size="mb">

                                        <span>
                                            {item.Cust_UserName}
                                        </span>
                                    </DataTableRow>
                                    <DataTableRow size="md">
                                        <span>{item.Cust_Name}</span>
                                    </DataTableRow>
                                    <DataTableRow size="md">
                                        <span>{item.Cust_mobileNo}</span>
                                    </DataTableRow>
                                    <DataTableRow size="md">
                                        <span>{item.rankstage}</span>
                                    </DataTableRow>
                                    <DataTableRow size="md">
                                        <span>{item.Status}</span>
                                    </DataTableRow>
                                    <DataTableRow size="md">
                                        <span>{item.Paid_Date}</span>
                                    </DataTableRow>
                                    <DataTableRow size="md">
                                        <span>{item.Entry_Date}</span>
                                    </DataTableRow>
                                    <DataTableRow size="md">
                                        <span>{item.rankname}</span>
                                    </DataTableRow>


                                    {/* <DataTableRow size="lg">
                                                <span>{item.lastLogin}</span>
                                            </DataTableRow>
                                            <DataTableRow size="md">
                                                <span
                                                    className={`tb-status text-${item.status === "Active" ? "success" : item.status === "Pending" ? "warning" : "danger"
                                                        }`}
                                                >
                                                    {item.status}
                                                </span>
                                            </DataTableRow> */}

                                </DataTableItem>
                            );
                        })
                        : null}
                </DataTableBody>
                <div className="card-inner">
                    {currentItems.length > 0 ? (
                        <PaginationComponent
                            itemPerPage={itemPerPage}
                            totalItems={data.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    ) : (
                        <div className="text-center">
                            <span className="text-silent">Fetching Data Please Wait</span>
                        </div>
                    )}
                </div>
            </DataTable>
        </React.Fragment>
    );
};
export default Usertable;
