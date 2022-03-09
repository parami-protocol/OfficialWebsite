import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { useIntl } from 'umi';
import styles from '../../style.less';
import style from './style.less';
import { SiTelegram, SiTwitter, SiDiscord } from 'react-icons/si';

const Community: React.FC = () => {
    const intl = useIntl();

    const { Title } = Typography;

    return (
        <div className={style.communityContainer}>
            <div className={styles.contentContainer}>
                <Title
                    level={3}
                    className={style.title}
                >
                    {intl.formatMessage({
                        id: 'index.community.title',
                        defaultMessage: 'Community',
                    })}
                </Title>
                <div className={style.triangles}>
                    <div className={style.text}>
                        <span>Web3 Grants</span>
                        {intl.formatMessage({
                            id: 'index.community.and',
                            defaultMessage: 'And',
                        })}
                        <span>Substrate Builder</span>
                    </div>
                    <div className={style.triangleTop} />
                    <div className={style.triangleBottom} />
                </div>
                <p className={style.content}>
                    {intl.formatMessage({
                        id: 'index.community.content',
                        defaultMessage: 'Parami Protocol is born from the {substrate} and backed by the most hardcore and widespread {defi}.',
                    }, {
                        substrate: <span>Substrate Community</span>,
                        defi: <span>DeFi Community</span>
                    })}
                </p>
                <Row gutter={[32, 32]}>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Card
                            className={style.card}
                        >
                            <SiTelegram
                                className={style.icon}
                                onClick={() => {
                                    window.open('https://t.me/ParamiProtocolEN', '_blank')
                                }}
                            />
                            <Title
                                level={3}
                                className={style.title}
                            >
                                {intl.formatMessage({
                                    id: 'index.community.telegram.members',
                                    defaultMessage: '{num} Members',
                                }, {
                                    num: '120,000+',
                                })}
                            </Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Card
                            className={style.card}
                        >
                            <SiTwitter
                                className={style.icon}
                                onClick={() => {
                                    window.open('https://twitter.com/paramiprotocol', '_blank')
                                }}
                            />
                            <Title
                                level={3}
                                className={style.title}
                            >
                                {intl.formatMessage({
                                    id: 'index.community.twitter.followers',
                                    defaultMessage: '{num} Followers',
                                }, {
                                    num: '89,800+',
                                })}
                            </Title>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Card
                            className={style.card}
                        >
                            <SiDiscord
                                className={style.icon}
                                onClick={() => {
                                    window.open('https://discord.com/invite/bxFuekgvYJ', '_blank')
                                }}
                            />
                            <Title
                                level={3}
                                className={style.title}
                            >
                                {intl.formatMessage({
                                    id: 'index.community.discord.members',
                                    defaultMessage: '{num} Members',
                                }, {
                                    num: '12,800+',
                                })}
                            </Title>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Community;
