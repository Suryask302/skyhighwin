import React from "react";
import { BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Block, BlockDes } from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LevelTr from "./incomePartials/LevelTr";

const LevelIncome = () => {
    return (
        <React.Fragment>
            <Head title="level Income" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Level Income</BlockTitle>
                            <BlockDes>level income report</BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <LevelTr />
            </Content>
            <Block>

            </Block>
        </React.Fragment>
    );
};

export default LevelIncome;
