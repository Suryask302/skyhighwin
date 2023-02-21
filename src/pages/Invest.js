import React, { useState } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import RecentInvest from "../components/partials/invest/recent-investment/RecentInvest";
import { Card } from "reactstrap";
import Walletstatus from "./mypages/Dashboard/Walletstatus";
import Incomeoverview from "./mypages/Dashboard/Incomeoverview";
import {
  Block,
  BlockDes,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  PreviewAltCard,
  TooltipComponent,
} from "../components/Component";

const InvestHomePage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Homepage" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Welcome To Skyhigh Win</BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to The world Of Sky High Win</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>

                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            <Col md="3">
              <PreviewAltCard className="card-full d-flex justify-content-center">
                <div className="card-title-group align-start mb-0 d-flex">
                  <div className="card-title">
                    <h6 className="subtitle">Total Team</h6>
                  </div>
                  <div className="card-tools">
                    <TooltipComponent
                      iconClass="card-hint"
                      icon="help-fill"
                      direction="left"
                      id="invest-deposit"
                      text="Total Team"
                    ></TooltipComponent>
                  </div>
                </div>
                <div className="card-amount">
                  <span className="amount">
                    49,595.34
                  </span>
                  <span className="change up text-success">
                    <Icon name="arrow-long-up"></Icon>1.93%
                  </span>
                </div>
             
              </PreviewAltCard>
            </Col>

            <Col md="3">
              <PreviewAltCard className="card-full d-flex justify-content-center">
                <div className="card-title-group align-start mb-0">
                  <div className="card-title">
                    <h6 className="subtitle">Active Team</h6>
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
                    49,595.34 
                  </span>
                  <span className="change down text-danger">
                    <Icon name="arrow-long-down"></Icon>1.93%
                  </span>
                </div>
              
              </PreviewAltCard>
            </Col>

            <Col md="3">
              <PreviewAltCard className="card-full d-flex justify-content-center">
                <div className="card-title-group align-start mb-0">
                  <div className="card-title">
                    <h6 className="subtitle">Total Referrals</h6>
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
                    79,358.50
                  </span>
                </div>
             
              </PreviewAltCard>
            </Col>

            <Col md="3">
              <PreviewAltCard className="card-full d-flex justify-content-center">
                <div className="card-title-group align-start mb-0">
                  <div className="card-title">
                    <h6 className="subtitle">Active Referrals</h6>
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
                    79,358.50
                  </span>
                </div>
             
              </PreviewAltCard>
            </Col>

            <Col md="6" xxl="4">
                <Incomeoverview />
            </Col>

            <Col md="6" xxl="4">
              <Walletstatus />
            </Col>

            <Col xl="12" xxl="8">
              <Card className="card-bordered card-full">
                <RecentInvest />
              </Card>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default InvestHomePage;
