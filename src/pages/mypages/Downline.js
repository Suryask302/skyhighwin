import React from "react";
import { BlockBetween, BlockHead, BlockHeadContent, BlockTitle, BlockDes, Block } from "../../components/Component";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import DownlineTable from "./components/DownlineTable";


const Downline = ({ ...props }) => {
    return (
        <React.Fragment>
            <Head title="My Downlines" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Downlines</BlockTitle>
                            <BlockDes className="text-soft">
                                <p>my downlines</p>
                            </BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <DownlineTable />
            </Content>
            <Block>



            </Block>
        </React.Fragment>
    );
};

export default Downline;
