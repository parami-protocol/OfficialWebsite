import React from 'react';
import styles from '@/style/common.less';
import Banner from './components/banner';
import Cards from './components/cards';
import Signup from './components/signup';

const Crowdloan: React.FC = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <Banner />
                <Cards />
                <Signup />
            </div>
        </>
    )
}

export default Crowdloan;
