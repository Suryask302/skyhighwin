import React from "react";
import { BlockBetween, BlockHead, BlockHeadContent, BlockTitle, BlockDes } from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import SkyforceIncomeTr from "./incomePartials/SkyforceIncomeTr.js";

const SkyforceIncome = () => {
    return (
        <React.Fragment>
            <Head title="skyforce Income" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Skyforce Boosting Income</BlockTitle>
                            <BlockDes>skyforce boosting income report</BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <SkyforceIncomeTr />
            </Content>
        </React.Fragment>
    );
};

export default SkyforceIncome;
