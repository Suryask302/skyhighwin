import React from 'react'
import Head from '../../../layout/head/Head'
import { BlockHead, BlockBetween, BlockHeadContent, BlockTitle, BlockDes } from '../../../components/Component'
import Content from '../../../layout/content/Content'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Icon } from '../../../components/Component'


const Transferhistory = () => {
    return (
        <React.Fragment>
            <Head title="My Referrals" />
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent className='mb-0 pb-0'>
                            <BlockTitle page>Fund Wallet Transaction</BlockTitle>
                            <BlockDes>
                                Transfer fund peer to peer
                            </BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <table className="table">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Type</th>
                            <th scope="col">Transfer Date</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style={{ color: "#6576ff", fontWeight: "bold" }} scope="row">4947</th>
                            <td>Jiva02</td>
                            <td>JIVA</td>
                            <td>$ 1000.0000	</td>
                            <td style={{ color: "green", fontWeight: "bold" }}>Recieve</td>
                            <td>2023-01-30 09:05:03	</td>
                            <td>Fund Received</td>
                        </tr>
                        <tr>
                            <th style={{ color: "#6576ff", fontWeight: "bold" }} scope="row">4904</th>
                            <td>Kashyap23</td>
                            <td>SOURAV KASHYAP</td>
                            <td>$ 2050.0000	</td>
                            <td style={{ color: "green", fontWeight: "bold" }}>Recieve</td>
                            <td>2023-01-30 09:05:03	</td>
                            <td>Fund Received</td>
                        </tr>
                        <tr>
                            <th style={{ color: "#6576ff", fontWeight: "bold" }} scope="row">4827</th>
                            <td>Sonama</td>
                            <td>SONAM JII</td>
                            <td>$ 1875.0000</td>
                            <td style={{ color: "red", fontWeight: "bold" }}>Transfer</td>
                            <td>2023-01-30 09:05:03	</td>
                            <td>Fund Transfer</td>
                        </tr>
                        <tr>
                            <th style={{ color: "#6576ff", fontWeight: "bold" }} scope="row">4825</th>
                            <td>Cryptoking</td>
                            <td>CRYPTO KING	</td>
                            <td>$ 1336.0000	</td>
                            <td style={{ color: "red", fontWeight: "bold" }}>Transfer</td>
                            <td>2022-12-01 08:16:41</td>
                            <td>Fund Transfer</td>
                        </tr>
                        <tr>
                            <th style={{ color: "#6576ff", fontWeight: "bold" }} scope="row">4826</th>
                            <td>Cryptoking</td>
                            <td>CRYPTO KING	</td>
                            <td>$ 1336.0000	</td>
                            <td style={{ color: "green", fontWeight: "bold" }}>Recieve</td>
                            <td>2022-12-01 08:16:41</td>
                            <td>Fund Transfer</td>
                        </tr>
                        <tr>
                            <th style={{ color: "#6576ff", fontWeight: "bold" }} scope="row">4827</th>
                            <td>Cryptoking</td>
                            <td>CRYPTO KING	</td>
                            <td>$ 1336.0000	</td>
                            <td style={{ color: "green", fontWeight: "bold" }}>Recieve</td>
                            <td>2022-12-01 08:16:41</td>
                            <td>Fund Transfer</td>
                        </tr>
                        <tr>
                            <th style={{ color: "#6576ff", fontWeight: "bold" }} scope="row">4828</th>
                            <td>Cryptoking</td>
                            <td>CRYPTO KING	</td>
                            <td>$ 1336.0000	</td>
                            <td style={{ color: "green", fontWeight: "bold" }}>Recieve</td>
                            <td>2022-12-01 08:16:41</td>
                            <td>Fund Transfer</td>
                        </tr>
                        <tr>
                            <th style={{ color: "#6576ff", fontWeight: "bold" }} scope="row">4829</th>
                            <td>Cryptoking</td>
                            <td>CRYPTO KING	</td>
                            <td>$ 1336.0000	</td>
                            <td style={{ color: "green", fontWeight: "bold" }}>Recieve</td>
                            <td>2022-12-01 08:16:41</td>
                            <td>Fund Transfer</td>
                        </tr>
                        <tr>
                            <th style={{ color: "#6576ff", fontWeight: "bold" }} scope="row">4830</th>
                            <td>Cryptoking</td>
                            <td>CRYPTO KING	</td>
                            <td>$ 1336.0000	</td>
                            <td style={{ color: "green", fontWeight: "bold" }}>Recieve</td>
                            <td>2022-12-01 08:16:41</td>
                            <td>Fund Transfer</td>
                        </tr>
                        <tr>
                            <th style={{ color: "#6576ff", fontWeight: "bold" }} scope="row">4831</th>
                            <td>Cryptoking</td>
                            <td>CRYPTO KING	</td>
                            <td>$ 1336.0000	</td>
                            <td style={{ color: "green", fontWeight: "bold" }}>Recieve</td>
                            <td>2022-12-01 08:16:41</td>
                            <td>Fund Transfer</td>
                        </tr>
                    </tbody>
                </table>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink className="page-link-prev" href="#prev" onClick={(ev) => ev.preventDefault()}>
                            <Icon name="chevrons-left" />
                            <span>Prev</span>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 1 </PaginationLink>

                        <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 2 </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink tag="span">
                            <Icon name="more-h" />
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#item" onClick={(ev) => ev.preventDefault()}> 6 </PaginationLink>
                    </PaginationItem>

                </Pagination>


            </Content>
        </React.Fragment>
    )
}

export default Transferhistory