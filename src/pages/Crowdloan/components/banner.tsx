import React from 'react';
import { useIntl } from 'umi';
import styles from '../style.less';
import style from './banner.less';

const Banner: React.FC = () => {
    const intl = useIntl();

    return (
        <div className={style.bannerContainer}>
            <div className={styles.contentContainer}>
                <div className={style.title}>
                    {intl.formatMessage({
                        id: 'crowdloan.title',
                        defaultMessage: 'Parami Crowdloan',
                    })}
                </div>
                <div className={style.wrap}>
                    <div className={style.wrapRight}>
                        <div className={style.totalDOT}>
                            {intl.formatMessage({
                                id: 'crowdloan.totalDOT.wrap',
                                defaultMessage: 'Coming Soon',
                            })}
                        </div>
                        {/* <div className={style.totalDOT}>
                            {intl.formatMessage({
                                id: 'crowdloan.totalDOT',
                                defaultMessage: '{total} Total DOT Received',
                            }, {
                                total: (<span className={style.highLight}>0</span>)
                            })}
                        </div>
                        <p>
                            {intl.formatMessage({
                                id: 'crowdloan.totalDOT.wrap',
                                defaultMessage: 'The Parami crowdloan will coming soon.',
                            })}
                        </p> */}
                    </div>
                </div>
                <div className={style.bgImg}>
                    <img src={'/images/background/astronomy.svg'} />
                </div>
            </div>
        </div>
    )
}

export default Banner;
