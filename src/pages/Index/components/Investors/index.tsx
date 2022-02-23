import React from 'react';
import { useIntl } from 'umi';
import styles from '../../style.less';
import style from './style.less';
import { Col, Row, Typography } from 'antd';

const Item: React.FC<{
    name: string;
    url: string;
}> = ({ name, url }) => {
    return (
        <div
            className={style.logoItem}
            onClick={() => { window.open(url) }}
        >
            <img src={`/images/investors/${name}`} />
        </div>
    )
}

const Investors: React.FC = () => {
    const intl = useIntl();

    const { Title } = Typography;

    return (
        <div className={style.investorsContainer}>
            <div className={styles.contentContainer}>
                <Title
                    level={3}
                    className={style.title}
                >
                    {intl.formatMessage({
                        id: 'index.investors.title',
                        defaultMessage: 'Investors',
                    })}
                </Title>
                <div className={style.logos}>
                    <Row gutter={[32, 64]}>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='ngc-ventures-vector-logo.svg'
                                url='https://www.ngc.fund/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='cms.svg'
                                url='http://cmsholdings.io/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='GBV-logo.svg'
                                url='https://www.gbv.capital/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='DFG.svg'
                                url='https://www.dfg.fund/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='genblock.svg'
                                url='https://genblock.capital/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='SignumCapital.svg'
                                url='https://www.signum.capital/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='axia8.svg'
                                url='https://www.axia8.com/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='Spark.svg'
                                url='https://www.sparkdigitalcapital.com/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='digital-re.svg'
                                url='https://www.drf.ee/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='AU21.svg'
                                url='https://au21.capital/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='GBIC.svg'
                                url='https://gbic.io/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='pnyx.svg'
                                url='https://pnyx.ventures/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='ruby.svg'
                                url='https://rubycapital.sg/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='titans.svg'
                                url='https://titans.ventures/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='gateio.svg'
                                url='https://www.gate.io/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='bella.svg'
                                url='https://bella.fi/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='arkstream.svg'
                                url='https://arkstream.capital/'
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Item
                                name='weblock.svg'
                                url='https://www.weblock.vip/'
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Investors;
