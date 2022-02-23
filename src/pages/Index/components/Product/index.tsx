import React from 'react';
import { useIntl } from 'umi';
import styles from '../../style.less';
import style from './style.less';
import { Card, Col, Row, Typography } from 'antd';
import { FcBusinessContact, FcEngineering, FcMindMap } from 'react-icons/fc';

const Product: React.FC = () => {
    const intl = useIntl();

    const { Title } = Typography;

    return (
        <div className={style.cardContainer}>
            <div className={styles.contentContainer}>
                <Row gutter={[32, 32]}>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Card
                            className={style.card}
                        >
                            <FcBusinessContact
                                className={style.icon}
                            />
                            <Title
                                level={3}
                                className={style.title}
                            >
                                {intl.formatMessage({
                                    id: 'index.identityAggregator.title',
                                    defaultMessage: 'Identity Aggregator',
                                })}
                            </Title>
                            {intl.formatMessage({
                                id: 'index.identityAggregator.content',
                                defaultMessage: 'Aggregates identity and the related information from different blockchain and social platforms.',
                            })}
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Card
                            className={style.card}
                        >
                            <FcEngineering
                                className={style.icon}
                            />
                            <Title
                                level={3}
                                className={style.title}
                            >
                                {intl.formatMessage({
                                    id: 'index.identityEngine.title',
                                    defaultMessage: 'Identity Engine',
                                })}
                            </Title>
                            {intl.formatMessage({
                                id: 'index.identityEngine.content',
                                defaultMessage: 'Deal with identity information calculation and make it valuable. including tools and SDK.',
                            })}
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Card
                            className={style.card}
                        >
                            <FcMindMap
                                className={style.icon}
                            />
                            <Title
                                level={3}
                                className={style.title}
                            >
                                {intl.formatMessage({
                                    id: 'index.blockchainService.title',
                                    defaultMessage: 'Blockchain Service',
                                })}
                            </Title>
                            {intl.formatMessage({
                                id: 'index.identityEngine.content',
                                defaultMessage: 'Powered by Substrate and Polkadot, as a parachain to ensure sustainability and scalability.',
                            })}
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Product;
