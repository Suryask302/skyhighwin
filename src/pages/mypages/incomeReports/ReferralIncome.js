import React from "react";
import { BlockBetween, BlockHead, BlockHeadContent, BlockTitle  } from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import RefTr from "./incomePartials/RefTr";


const ReferralIncome = () => {
    return (
        <React.Fragment>
            <Head title="Referral Income" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Sponsor Income</BlockTitle>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <RefTr />
            </Content>
        </React.Fragment>
    );
};

export default ReferralIncome;
