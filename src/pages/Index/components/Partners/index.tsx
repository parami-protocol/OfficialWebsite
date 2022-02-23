import { Col, Row, Typography } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
import styles from '../../style.less';
import style from './style.less';

const Item: React.FC<{
    name: string;
}> = ({ name }) => {
    return (
        <div className={style.logoItem}>
            <img src={`/images/partners/${name}-icon.svg`} />
        </div>
    )
}

const Partners: React.FC = () => {
    const intl = useIntl();

    const { Title } = Typography;

    return (
        <div className={style.partnerContainer}>
            <div className={styles.contentContainer}>
                <Title
                    level={3}
                    className={style.title}
                >
                    {intl.formatMessage({
                        id: 'index.partners.title',
                        defaultMessage: 'Partners',
                    })}
                </Title>
                <div className={style.logos}>
                    <Row gutter={[32, 64]}>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Item name='yfii' />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Item name='bella' />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Item name='yin' />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Item name='satoshi_club' />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Item name='metis' />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Item name='solv' />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Item name='1sol' />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Item name='tmp' />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Partners;
