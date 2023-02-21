import React from "react";
import { BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Block, BlockDes } from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import BoostingTr from "./incomePartials/BoostingTr.js";

const LevelIncome = () => {
    return (
        <React.Fragment>
            <Head title="Boosting Board" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Boosting Income</BlockTitle>
                            <BlockDes>boosting income report</BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <BoostingTr />
            </Content>
            <Block>

            </Block>
        </React.Fragment>
    );
};

export default LevelIncome;
