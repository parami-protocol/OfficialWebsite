import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
import styles from '../style.less';
import style from './cards.less';

const Cards: React.FC = () => {
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
                            <Title
                                level={3}
                                className={style.title}
                            >
                                {intl.formatMessage({
                                    id: 'crowdloan.whatIsCrowdloan.title',
                                    defaultMessage: 'What is Crowdloan',
                                })}
                            </Title>
                            {intl.formatMessage({
                                id: 'crowdloan.whatIsCrowdloan.content',
                                defaultMessage: 'A way for the Polkadot community to support projects that wish to deploy to the Polkadot network.',
                            })}
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Card
                            className={style.card}
                        >
                            <Title
                                level={3}
                                className={style.title}
                            >
                                {intl.formatMessage({
                                    id: 'crowdloan.whatIsParami.title',
                                    defaultMessage: 'What is Parami',
                                })}
                            </Title>
                            {intl.formatMessage({
                                id: 'crowdloan.whatIsParami.content',
                                defaultMessage: 'Parami Protocol proposes an AD 3.0 paradigm powered by blockchain technology for Web 3. It provides a protocol stack for building a user-centric, tokenized advertising economy.',
                            })}
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Card
                            className={style.card}
                        >
                            <Title
                                level={3}
                                className={style.title}
                            >
                                {intl.formatMessage({
                                    id: 'crowdloan.aboutTheParamiCrowdloan.title',
                                    defaultMessage: 'About The Parami Crowdloan',
                                })}
                            </Title>
                            {intl.formatMessage({
                                id: 'crowdloan.whatIsParami.content',
                                defaultMessage: 'The Parami Foundation hosted a crowdloan for the Parami network in January 2022. Find out more about how the event was structured.',
                            })}
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Cards;
