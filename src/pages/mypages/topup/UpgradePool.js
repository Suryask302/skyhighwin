import React from 'react'
import Head from '../../../layout/head/Head'
import Content from '../../../layout/content/Content'
import { BlockHead, BlockBetween, BlockHeadContent, BlockTitle } from '../../../components/Component'
import { Row, Col } from '../../../components/Component'
import { PreviewAltCard } from '../../../components/Component'
import { Button, Card, CardText, CardBody, CardHeader } from 'reactstrap'

const UpgradePool = () => {

    return (
        <React.Fragment>
            <Head title="My Referrals" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent className='mb-0 pb-0'>
                            <BlockTitle page>Upgrade My Account</BlockTitle>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>

                <Row className="g-gs">
                    <Col lg="5">
                        <PreviewAltCard className="card-full">
                            <div className="card-title-group  d-flex">
                                <div className="card-title mb-4">
                                    <h6>Fund Wallet</h6>
                                </div>
                            </div>
                            <Card className="card-bordered">
                                <CardBody className="card-inner d-flex flex-row align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="150px" height="70px">
                                        <rect
                                            width="55"
                                            height="39"
                                            x="9"
                                            y="21"
                                            fill="#fff"
                                            stroke="#6576ff"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            rx="6"
                                            ry="6"
                                        ></rect>
                                        <path
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 44L25 44"
                                        ></path>
                                        <path
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M30 44L38 44"
                                        ></path>
                                        <path
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M42 44L50 44"
                                        ></path>
                                        <path
                                            fill="none"
                                            stroke="#c4cefe"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 50L36 50"
                                        ></path>
                                        <rect width="15" height="8" x="16" y="31" fill="#c4cefe" rx="1" ry="1"></rect>
                                        <path
                                            fill="#fff"
                                            stroke="#6576ff"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M76.79 72.87L32.22 86.73a6 6 0 01-7.47-4L17 57.71a6 6 0 014-7.51l44.52-13.86a6 6 0 017.48 4l7.73 25.06a6 6 0 01-3.94 7.47z"
                                        ></path>
                                        <path fill="#6576ff" d="M75.27 47.3L19.28 64.71 17.14 57.76 73.12 40.35 75.27 47.3z"></path>
                                        <path
                                            fill="#c4cefe"
                                            d="M30 77.65l-1.9-6.79a1 1 0 01.69-1.23l4.59-1.3a1 1 0 011.23.7l1.9 6.78a1 1 0 01-.67 1.19l-4.59 1.3a1 1 0 01-1.25-.65zM41.23 74.48l-1.9-6.78a1 1 0 01.67-1.23l4.58-1.3a1 1 0 011.23.69l1.9 6.78a1 1 0 01-.71 1.24l-4.58 1.29a1 1 0 01-1.19-.69zM52.43 71.32l-1.9-6.79a1 1 0 01.69-1.23l4.59-1.3a1 1 0 011.19.7l1.9 6.78a1 1 0 01-.69 1.23L53.66 72a1 1 0 01-1.23-.68z"
                                        ></path>
                                        <ellipse
                                            cx="55.46"
                                            cy="19.1"
                                            fill="#fff"
                                            stroke="#6576ff"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            rx="16.04"
                                            ry="16.1"
                                        ></ellipse>
                                        <ellipse cx="55.46" cy="19.1" fill="#e3e7fe" rx="12.11" ry="12.16"></ellipse>
                                        <text
                                            fill="#6576ff"
                                            fontFamily="Nunito-Black, Nunito Black"
                                            fontSize="16.12"
                                            transform="matrix(.99 0 0 1 50.7 23.72)"
                                        >
                                            $
                                        </text>
                                    </svg>

                                    <CardText>
                                        <h5>Available Balance</h5>
                                        <h6>$ 1050.00</h6>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Button color='primary' className='mt-4'>
                                AddFund
                            </Button>
                        </PreviewAltCard>
                    </Col>
                    <Col md="7" >
                        <Card className="card-bordered" inverse color="secondary" style={{ height: "100%" }} >
                            <CardHeader style={{
                                height: "25%",
                                display: "flex",
                                alignItems: "center"
                            }}><h5>Upgrade For Pool</h5></CardHeader>
                            <CardBody className="card-inner">
                                <CardText>
                                    <span style={{ fontSize: "1rem" }}>All Pools Are Upgraded </span>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </React.Fragment >
    )
}

export default UpgradePool