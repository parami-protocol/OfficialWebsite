import { Typography } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
import styles from '../../style.less';
import style from './style.less';

const Introduction: React.FC = () => {
    const intl = useIntl();

    const { Title } = Typography;

    return (
        <div className={style.introContainer}>
            <div className={styles.contentContainer}>
                <Title
                    level={3}
                    className={style.title}
                >
                    {intl.formatMessage({
                        id: 'index.introduction.title',
                        defaultMessage: 'Introduction',
                    })}
                </Title>
                <p className={style.content}>
                    {intl.formatMessage({
                        id: 'index.introduction.content1',
                        defaultMessage: 'Parami is short for PARA METAVERSE IDENTITY. As the next generation identity protocol based on the W3C decentralized identity standard, it is designed for metaverse and Web 3 users with self-sovereign and permissionless service.'
                    })}
                </p>
                <p className={style.content}>
                    {intl.formatMessage({
                        id: 'index.introduction.content2',
                        defaultMessage: 'Parami Protocol aggregates users\' on-chain data and social identity information creating value with onchain reputation airdrops, which we call AD3.0, with privacy preservation in mind.'
                    })}
                </p>
                <p className={style.content}>
                    {intl.formatMessage({
                        id: 'index.introduction.content3',
                        defaultMessage: 'Combining with DeFi and NFT tools, Parami aims to build a human-centric SocialFi network for metaverse users.'
                    })}
                </p>
            </div>
        </div>
    )
}

export default Introduction;
