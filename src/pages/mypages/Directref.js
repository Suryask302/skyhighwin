import React from "react";
import { BlockBetween, BlockHead, BlockHeadContent, BlockTitle, BlockDes, Block } from "../../components/Component";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Usertable from "./components/Usertable";


const Directref = ({ ...props }) => {
    return (
        <React.Fragment>
            <Head title="My Referrals" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Direct Referrals</BlockTitle>
                            <BlockDes className="text-soft">
                                <p>my direct referrals</p>
                            </BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <Usertable />
            </Content>
            <Block>



            </Block>
        </React.Fragment>
    );
};

export default Directref;
