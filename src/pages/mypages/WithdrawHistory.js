import React from "react";
import { BlockBetween, BlockHead, BlockHeadContent, BlockTitle, BlockDes, Block } from "../../components/Component";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Transaction from '../../components/partials/default/transaction/Transaction'


const WithdrawHistory = ({ ...props }) => {
    return (
        <React.Fragment>
            <Head title="Withdraw History" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Withdraw History</BlockTitle>
                            <BlockDes className="text-soft">
                                <p>my withdrawls</p>
                            </BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <Transaction />
            </Content>
            <Block>



            </Block>
        </React.Fragment>
    );
};

export default WithdrawHistory;
