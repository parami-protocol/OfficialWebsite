import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useIntl } from 'umi';
import styles from './style.less';
import Cubes from './components/Cubes';
import Lights from './components/Lights';
import Environment from './components/Environment';
import Product from './components/Product';
import Introduction from './components/Introduction';
import Overview from './components/Overview';
import Community from './components/Community/index';
import Partners from './components/Partners';
import Tokenomics from './components/Tokenomics';
import Contact from './components/Contact';
import Investors from './components/Investors/index';
import ADTab from './components/ADTab';

const Index: React.FC = () => {
    const intl = useIntl();

    return (
        <div className={styles.indexContainer}>
            <div className={styles.bannerContainer}>
                <div className={styles.title}>
                    {intl.formatMessage({
                        id: 'index.slogan',
                        defaultMessage: 'BUILD AD3 FOR WEB3',
                    })}
                </div>
                <Canvas
                    style={{
                        position: 'absolute',
                    }}
                >
                    <Cubes />
                    <Lights />
                    <Environment />
                </Canvas>
            </div>
            <Product />
            <ADTab />
            <Introduction />
            <Overview />
            <Community />
            <Partners />
            <Tokenomics />
            <Contact />
            <Investors />
        </div>
    )
}

export default Index;
