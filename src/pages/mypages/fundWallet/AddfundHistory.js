import React from 'react'
import Head from '../../../layout/head/Head'
import { BlockHead, BlockBetween, BlockHeadContent, BlockTitle, BlockDes } from '../../../components/Component'
import Content from '../../../layout/content/Content'
import TransListCrypto from '../../pre-built/trans-list/TransListCrypto'


const AddfundHistory = () => {
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

                <TransListCrypto />
            </Content>
        </React.Fragment>
    )
}

export default AddfundHistory