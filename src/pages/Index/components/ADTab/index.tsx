import { Col, Row } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useIntl } from 'umi';
import styles from '../../style.less';
import style from './style.less';

const ADTab: React.FC = () => {
    const [tab, setTab] = useState<string>('privacy');

    const intl = useIntl();

    return (
        <div className={style.adtabContainer}>
            <div className={styles.contentContainer}>
                <Row gutter={[32, 32]}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className={style.tabSelector}>
                            <div
                                className={classNames(style.tabItem, tab === 'privacy' ? '' : style.inactive)}
                                onClick={() => setTab('privacy')}
                            >
                                {intl.formatMessage({
                                    id: 'index.adtab.item1.title',
                                    defaultMessage: 'AD Privacy',
                                })}
                            </div>
                            <div
                                className={classNames(style.tabItem, tab === 'oracle' ? '' : style.inactive)}
                                onClick={() => setTab('oracle')}
                            >
                                {intl.formatMessage({
                                    id: 'index.adtab.item2.title',
                                    defaultMessage: 'AD Oracle',
                                })}
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                        {tab === 'privacy' && (
                            <div className={style.tabContent}>
                                {intl.formatMessage({
                                    id: 'index.adtab.item1.content',
                                    defaultMessage: 'The AD Privacy Layer provides a unique personal crypto advertising preference (PCAP) profile attached to each users DID containing user advertising privacy management services. The PCAP profile is designed to allow users to receive payments and manage their user preference data. The preserved data can be used but can not be seen, allowing the user to maintain full ownership over their data.',
                                })}
                            </div>
                        )}
                        {tab === 'oracle' && (
                            <div className={style.tabContent}>
                                {intl.formatMessage({
                                    id: 'index.adtab.item2.content',
                                    defaultMessage: 'The decentralized oracle is designed for collecting data from the conventional Internet. It is built as part of the Substrate Offchain Worker(OCW) and specifically works for AD verification with low fees and fast response times.',
                                })}
                            </div>
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ADTab;
