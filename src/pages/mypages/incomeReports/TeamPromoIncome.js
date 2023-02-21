import React from "react";
import { BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Block, BlockDes } from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import TeamPromoTr from "./incomePartials/TeamPromoTr";

const TeamPromoIncome = () => {
    return (
        <React.Fragment>
            <Head title="team promo bonus" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Team Promotion Bonus</BlockTitle>
                            <BlockDes>team promotion income report</BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <TeamPromoTr />
            </Content>
            <Block>

            </Block>
        </React.Fragment>
    );
};

export default TeamPromoIncome;
