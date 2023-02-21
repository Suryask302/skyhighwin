import React from "react";
import { BlockBetween, BlockHead, BlockHeadContent, BlockTitle } from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { ReactDataTable } from "../../../components/Component";

const tableData = [
    {
        id: 1,
        username: "Sonama",
        name: "SONAM JII	",
        amount: "$ 25.00",
        activeDate: "2022-12-08 19:56:06"
    },
    {
        id: 2,
        username: "kgn222",
        name: "ANWAR HUSAIN",
        amount: "$ 25.00",
        activeDate: "2022-11-22 10:11:50"
    },
    {
        id: 3,
        username: "kgn111",
        name: "ANWAR HUSAIN",
        amount: "$ 25.00",
        activeDate: "2022-12-08 19:56:06"
    },
    {
        id: 4,
        username: "Kgn777",
        name: "KGN777",
        amount: "$ 25.00",
        activeDate: "2022-12-08 19:56:06"
    },
    {
        id: 5,
        username: "mahakal005",
        name: "SUDHIR",
        amount: "$ 25.00",
        activeDate: "2022-12-08 19:56:06"
    }
    , {
        id: 6,
        username: "mahakal004",
        name: "SUDHIR",
        amount: "$ 25.00",
        activeDate: "2022-12-08 19:56:06"
    },
    {
        id: 7,
        username: "ayan66777",
        name: "ANWAR HUSAIN",
        amount: "$ 25.00",
        activeDate: "2022-12-08 19:56:06"
    },
    {
        id: 8,
        username: "RAJESH74",
        name: "	RAJESH KUMARAWAT",
        amount: "$ 25.00",
        activeDate: "2022-12-08 19:56:06"
    }, {
        id: 9,
        username: "Sameer9090",
        name: "SAMEER KHAN",
        amount: "$ 25.00",
        activeDate: "2022-12-08 19:56:06"
    },
    {
        id: 10,
        username: "VIPDIMOND",
        name: "DIGAMBER PISE",
        amount: "$ 25.00",
        activeDate: "2022-12-08 19:56:06"
    }
]
const dataTableColumns = [
    {
        name: "#sr",
        selector: (row) => row.id,
        sortable: true,
    },
    {
        name: "Username",
        selector: (row) => row.username,
        sortable: true,
    },
    {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        hide: 370,
    },
    {
        name: "Amount",
        selector: (row) => row.amount,
        sortable: true,
        hide: "sm",
    },
    {
        name: "Active Date",
        selector: (row) => row.activeDate,
        sortable: true,
        hide: "sm",
    }
];



const ActivationHistory = () => {
    return (
        <React.Fragment>
            <Head title="My Referrals" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Activation History</BlockTitle>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <ReactDataTable data={tableData} columns={dataTableColumns} expandableRows pagination />
            </Content>
        </React.Fragment>
    );
};

export default ActivationHistory;
