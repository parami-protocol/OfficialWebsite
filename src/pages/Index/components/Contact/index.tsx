import React from 'react';
import { useIntl } from 'umi';
import style from './style.less';
import { Typography } from 'antd';
import { MdEmail } from 'react-icons/md';

const Contact: React.FC = () => {
    const intl = useIntl();

    const { Title } = Typography;

    return (
        <div className={style.contactContainer}>
            <div className={style.contentContainer}>
                <Title
                    level={3}
                    className={style.title}
                >
                    {intl.formatMessage({
                        id: 'index.contact.title',
                        defaultMessage: 'Contact',
                    })}
                </Title>
                <div
                    className={style.emailItem}
                    onClick={() => { window.open("mailto:roy@parami.io") }}
                >
                    <MdEmail
                        className={style.icon}
                    />
                    <span>
                        {intl.formatMessage({
                            id: 'index.contact.email',
                            defaultMessage: 'Contact Us',
                        })}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contact;
