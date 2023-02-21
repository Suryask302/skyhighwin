import React from 'react'
import Head from '../../../layout/head/Head'
import Content from '../../../layout/content/Content'
import { BlockHead, BlockBetween, BlockHeadContent, BlockTitle } from '../../../components/Component'
import { Row, Col } from '../../../components/Component'
import { PreviewAltCard } from '../../../components/Component'
import { Button, Form, FormGroup, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { useForm } from "react-hook-form";
const BoosterBoard = () => {
    const { errors, register, handleSubmit } = useForm();
    return (
        <React.Fragment>
            <Head title="Booster Board" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent className='mb-0 pb-0'>
                            <BlockTitle page>Booster Board</BlockTitle>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>

                <Row className="g-gs">
                    <Col lg="5">
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
                                    <h5>Booster Wallet</h5>
                                    <h6>$ 150.00</h6>
                                </CardText>
                            </CardBody>
                        </Card>


                        <Card className="card-bordered p-3">
                            <CardBody className="card-inner d-flex flex-column align-items-start">
                                <CardTitle> <h6>Entry To Boosting Board </h6></CardTitle>
                                <CardText>
                                    Add New Entry To Boosting Board With $12.5.
                                </CardText>
                                <Button color='primary' style={{ width: "100%", justifyContent: "center" }}>
                                    Add To Booster Board ID
                                </Button>
                            </CardBody>

                        </Card>
                    </Col>

                    <Col lg="7">
                        <PreviewAltCard className="card-full d-flex">
                            <CardTitle> <h6>Convert to withdraw wallet</h6> </CardTitle>
                            <CardSubtitle className='pb-4'>Convert Booster Wallet balance to withdrawal wallet</CardSubtitle>
                            <Form className="is-alter" onSubmit={handleSubmit()}>
                                <FormGroup>
                                    <label className="form-label">Amount To Be Convert</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Amount in USD"
                                        ref={register({ required: "This field is required" })}
                                    />
                                    {errors.name && <span className="invalid">{errors.name.message}</span>}
                                </FormGroup>
                                <FormGroup>
                                    <label className="form-label">Transaction Password</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"

                                        placeholder="Enter Transaction password"
                                        ref={register({ required: "This field is required" })}
                                    />
                                    {errors.name && <span className="invalid">{errors.name.message}</span>}
                                </FormGroup>

                                <FormGroup>
                                    <Button color='primary'>
                                        Convert Now
                                    </Button>
                                </FormGroup>
                            </Form>
                        </PreviewAltCard>
                    </Col>
                </Row>
                <Row className="g-gs">
                    <Col lg="12" className="mt-5">
                        <CardTitle className='mb-5'><h5>Boosting Board Status</h5></CardTitle>
                        <table className="table table-striped table-responsive-sm">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Downline L1</th>
                                    <th scope="col">Downline L2</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Entry Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>paid</td>
                                    <td>2022-08-21</td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>paid</td>
                                    <td>2022-08-21</td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>paid</td>
                                    <td>2022-08-21</td>

                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>paid</td>
                                    <td>2022-08-21</td>

                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>paid</td>
                                    <td>2022-08-21</td>

                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>paid</td>
                                    <td>2022-08-21</td>

                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>paid</td>
                                    <td>2022-08-21</td>

                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>paid</td>
                                    <td>2022-08-21</td>

                                </tr>

                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Content>
        </React.Fragment>
    )
}

export default BoosterBoard