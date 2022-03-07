import React from 'react';
import { Svga } from 'react-svga';
import style from './style.less';

const Loading: React.FC<{
    loading?: boolean;
}> = ({ loading }) => {
    return (
        <>
            <div
                className={style.mainContainer}
                style={{
                    opacity: loading && loading ? 1 : 0,
                    zIndex: loading && loading ? 999 : -100,
                }}
            >
                <div className={style.pageContainer}>
                    <Svga
                        src={'/images/parami.svga'}
                        className={style.loadingContainer}
                    />
                </div>
            </div>
        </>
    )
}

export default Loading;
