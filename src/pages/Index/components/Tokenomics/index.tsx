import { Typography } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
import styles from '../../style.less';
import style from './style.less';

const Tokenomics: React.FC = () => {
    const intl = useIntl();

    const { Title } = Typography;

    return (
        <div className={style.tokenomicsContainer}>
            <div className={styles.contentContainer}>
                <Title
                    level={3}
                    className={style.title}
                >
                    {intl.formatMessage({
                        id: 'index.tokenomics.title',
                        defaultMessage: 'Tokenomics',
                    })}
                </Title>
                <img
                    src={"/images/tokenomics.svg"}
                    className={style.cover}
                />
                <div className={style.content}>
                    <div className={style.title}>
                        {intl.formatMessage({
                            id: 'index.tokenomics.content.title',
                            defaultMessage: 'Decentralized Identify',
                        })}
                    </div>
                    <p>
                        {intl.formatMessage({
                            id: 'index.tokenomics.content.p1',
                            defaultMessage: 'Parami Protocol provides a complete set of PDID (Parami DID) solutions compatible with the W3C DID standard using Parami Nodes and expands its business on the basis of the DID standard. Parami Protocol will also provide DID aggregators for other DID standards.'
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics;
