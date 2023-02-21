import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
    Block,
    BlockDes,
    BlockBetween,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    Icon,
    Row,
    Col,
    PreviewAltCard,
    TooltipComponent,
    Button,
} from "../../components/Component";
import { FormGroup } from "reactstrap";
import { Card } from "reactstrap";
import Recentwithdraw from "./withdraw/Recentwithdraw";

const WithdrawReq = ({ ...props }) => {
    return (
        <React.Fragment>
            <Head title="Withdraw Request" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Withdraw Request</BlockTitle>
                            <BlockDes className="text-soft">
                                <p>request New Withdraw</p>
                            </BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>


                <Block>
                    <Row className="g-gs">
                        <Col md="6">
                            <PreviewAltCard className="card-full">
                                <div className="card-title-group align-start mb-0">
                                    <div className="card-title">
                                        <h6 className="subtitle">Total Deposit</h6>
                                    </div>
                                    <div className="card-tools">
                                        <TooltipComponent
                                            iconClass="card-hint"
                                            icon="help-fill"
                                            direction="left"
                                            id="invest-deposit"
                                            text="Total Deposited"
                                        ></TooltipComponent>
                                    </div>
                                </div>
                                <div className="card-amount">
                                    <span className="amount">
                                        49,595.34 <span className="currency currency-usd">USD</span>
                                    </span>
                                    <span className="change up text-success">
                                        <Icon name="arrow-long-up"></Icon>1.93%
                                    </span>
                                </div>
                                <div className="invest-data">
                                    <div className="invest-data-amount g-2">
                                        <div className="invest-data-history">
                                            <div className="title">This Month</div>
                                            <span className="amount">
                                                2,940.59 <span className="currency currency-usd"> USD</span>
                                            </span>
                                        </div>
                                        <div className="invest-data-history">
                                            <div className="title">This Week</div>
                                            <span className="amount">
                                                1,259.28 <span className="currency currency-usd"> USD</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="invest-data-ck">

                                    </div>
                                </div>
                            </PreviewAltCard>
                        </Col>

                        <Col md="6">
                            <PreviewAltCard className="card-full">
                                <div className="card-title-group align-start mb-0">
                                    <div className="card-title">
                                        <h6 className="subtitle">Total Withdraw</h6>
                                    </div>
                                    <div className="card-tools">
                                        <TooltipComponent
                                            iconClass="card-hint"
                                            icon="help-fill"
                                            direction="left"
                                            id="invest-withdraw"
                                            text="Total Withdrawn"
                                        ></TooltipComponent>
                                    </div>
                                </div>
                                <div className="card-amount">
                                    <span className="amount">
                                        49,595.34 <span className="currency currency-usd">USD</span>
                                    </span>
                                    <span className="change down text-danger">
                                        <Icon name="arrow-long-down"></Icon>1.93%
                                    </span>
                                </div>
                                <div className="invest-data">
                                    <div className="invest-data-amount g-2">
                                        <div className="invest-data-history">
                                            <div className="title">This Month</div>
                                            <div className="amount">
                                                2,940.59 <span className="currency currency-usd">USD</span>
                                            </div>
                                        </div>
                                        <div className="invest-data-history">
                                            <div className="title">This Week</div>
                                            <div className="amount">
                                                1,259.28 <span className="currency currency-usd">USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invest-data-ck">

                                    </div>
                                </div>
                            </PreviewAltCard>
                        </Col>



                        <Col className="m-auto" md={8}>
                            <PreviewAltCard className="card-full">

                                <div className="card-title">
                                    <h6 className="subtitle">Make Withdrawl</h6>
                                </div>
                                <FormGroup>
                                    <label className="form-label" htmlFor="name">
                                        Enter Amount To Withdraw
                                    </label>
                                    <div className="form-control-wrap">
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="name"
                                            name="name"
                                            placeholder="Enter Amount"

                                        />
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Button color="primary">
                                        send-OTP
                                    </Button>
                                </FormGroup>

                            </PreviewAltCard>
                        </Col>

                        <Col md="4">
                            <PreviewAltCard className="card-full">
                                <div className="card-title-group align-start mb-0">
                                    <div className="card-title">
                                        <h6 className="subtitle">Balance in Account</h6>
                                    </div>
                                    <div className="card-tools">
                                        <TooltipComponent
                                            iconClass="card-hint"
                                            icon="help-fill"
                                            direction="left"
                                            id="invest-balance"
                                            text="Total Balance"
                                        ></TooltipComponent>
                                    </div>
                                </div>
                                <div className="card-amount">
                                    <span className="amount">
                                        79,358.50 <span className="currency currency-usd">USD</span>
                                    </span>
                                </div>
                                <div className="invest-data">
                                    <div className="invest-data-amount g-2">
                                        <div className="invest-data-history">
                                            <div className="title">This Month</div>
                                            <div className="amount">
                                                2,940.59 <span className="currency currency-usd">USD</span>
                                            </div>
                                        </div>
                                        <div className="invest-data-history">
                                            <div className="title">This Week</div>
                                            <div className="amount">
                                                1,259.28 <span className="currency currency-usd">USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invest-data-ck">

                                    </div>
                                </div>
                            </PreviewAltCard>
                        </Col>

                        <Col xl="12" xxl="8">
                            <Card className="card-bordered card-full">
                                <Recentwithdraw />
                            </Card>
                        </Col>
                    </Row>
                </Block>

            </Content>
            <Block>



            </Block>
        </React.Fragment>
    );
};

export default WithdrawReq;
