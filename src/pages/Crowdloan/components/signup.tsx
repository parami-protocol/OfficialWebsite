import { Button, Input } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
import styles from '../style.less';
import style from './signup.less';

const Signup: React.FC = () => {
    const intl = useIntl();

    return (
        <div className={style.signupContainer}>
            <div
                className={styles.contentContainer}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className={style.title}>
                    {intl.formatMessage({
                        id: 'crowdloan.signup.title',
                        defaultMessage: 'Sign Up for Notifications',
                    })}
                </div>
                <p className={style.subtitle}>
                    Receive emails about important Foundation updates and events.
                </p>
                <div className={style.inputContainer}>
                    <Input
                        size='large'
                        allowClear
                        className={style.input}
                    />
                    <Button
                        type='primary'
                        size='large'
                        shape='round'
                        disabled
                    >
                        {intl.formatMessage({
                            id: 'common.submit',
                        })}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Signup;
