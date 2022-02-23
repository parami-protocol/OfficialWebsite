import { Typography } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
import styles from '../../style.less';
import style from './style.less';

const Overview: React.FC = () => {
    const intl = useIntl();

    const { Title } = Typography;

    return (
        <div className={style.overviewContainer}>
            <div className={styles.contentContainer}>
                <Title
                    level={3}
                    className={style.title}
                >
                    {intl.formatMessage({
                        id: 'index.overview.title',
                        defaultMessage: 'Overview',
                    })}
                </Title>
                <img
                    src={"/images/overview.svg"}
                    className={style.cover}
                />
                <div className={style.content}>
                    {intl.formatMessage({
                        id: 'index.overview.content',
                        defaultMessage: 'Param Protocol proposes an AD3.0 paradigm powered by blockchain technology for Web 3.0. It provides a protocol stack for building a user-centric, tokenized advertising economy.'
                    })}
                </div>
            </div>
        </div>
    )
}

export default Overview;
