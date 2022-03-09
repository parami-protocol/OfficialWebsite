import React, { useState } from 'react';
import { useIntl, history } from 'umi';
import Headroom from 'react-headroom';
import style from './style.less';
import type { HeaderViewProps } from '@ant-design/pro-layout/lib/Header';
import classNames from 'classnames';
import { MenuOutlined } from '@ant-design/icons';

const Header: React.FC<{
    props: HeaderViewProps;
}> = ({ props }) => {
    const [tab, setTab] = useState<string>('');
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    const intl = useIntl();

    return (
        <>
            <Headroom
                className={style.headerHeadroom}
                wrapperStyle={{
                    display: 'flex',
                    width: '100%',
                }}
            >
                <header className={style.headerTop}>
                    <div
                        className='headerLogoTop'
                        onClick={() => {
                            setTab('/');
                            history.push('/');
                        }}
                    >
                        <img src={'/images/logo-text-black.svg'} />
                    </div>
                    <div
                        className='headerLogoBottom'
                        onClick={() => {
                            setTab('/');
                            history.push('/');
                        }}
                    >
                        <img src={'/images/logo-text.svg'} />
                    </div>
                    <div className={style.rightMenu}>
                        <ul>
                            {props.menuData?.map((item) => {
                                if (item.exact && !item.hideInMenu) {
                                    return (
                                        <li
                                            className={classNames(
                                                style.tabItem,
                                                (tab === item.path || history.location.pathname === item.path) ? style.active : '',
                                            )}
                                            onClick={() => {
                                                setTab(item.path as string);
                                                history.push(item.path as string);
                                            }}
                                        >
                                            {item.name}
                                        </li>
                                    )
                                }
                            })}
                            <li
                                className={style.tabItem}
                                onClick={() => {
                                    window.open('https://astro.parami.io', '_blank');
                                }}
                            >
                                {intl.formatMessage({
                                    id: 'menu.astro',
                                })}
                            </li>
                            <li
                                className={style.tabItem}
                                onClick={() => {
                                    window.open('https://parami.notion.site/Careers-Parami-a162f4e6f3f2422cad00d5e8ece4be43', '_blank');
                                }}
                            >
                                {intl.formatMessage({
                                    id: 'menu.career',
                                })}
                            </li>
                            <li
                                className={style.tabItem}
                                onClick={() => {
                                    window.open('https://app.parami.io', '_blank');
                                }}
                            >
                                {intl.formatMessage({
                                    id: 'menu.app',
                                })}
                            </li>
                        </ul>
                    </div>
                </header>
            </Headroom>
            <div className={style.mobileHeader}>
                <img
                    src={'/images/logo-core-black.svg'}
                    className={style.mobileLogo}
                />
                <MenuOutlined
                    className={style.mobileMenuButton}
                    onClick={() => {
                        setToggleMenu(!toggleMenu);
                    }}
                />
            </div>
            <div
                className={style.mobileMask}
                style={{
                    display: toggleMenu ? 'block' : 'none',
                }}
            />
            <div
                className={style.mobileMenu}
                style={{
                    left: toggleMenu ? '0' : '-65vw',
                }}
            >
                <div className={style.mobileMenuHeader}>
                    <img src={'/images/logo-text.svg'} />
                </div>
                <ul className={style.mobileMenuList}>
                    {props.menuData?.map((item) => {
                        if (item.exact && !item.hideInMenu) {
                            return (
                                <li
                                    className={classNames(
                                        style.tabItem,
                                        (tab === item.path || history.location.pathname === item.path) ? style.active : '',
                                    )}
                                    onClick={() => {
                                        setTab(item.path as string);
                                        history.push(item.path as string);
                                        setToggleMenu(false);
                                    }}
                                >
                                    {item.name}
                                </li>
                            )
                        }
                        return;
                    })}
                    <li
                        className={style.tabItem}
                        onClick={() => {
                            window.open('https://astro.parami.io', '_blank');
                        }}
                    >
                        {intl.formatMessage({
                            id: 'menu.astro',
                        })}
                    </li>
                    <li
                        className={style.tabItem}
                        onClick={() => {
                            window.open('https://parami.notion.site/Careers-Parami-a162f4e6f3f2422cad00d5e8ece4be43', '_blank');
                        }}
                    >
                        {intl.formatMessage({
                            id: 'menu.career',
                        })}
                    </li>
                    <li
                        className={style.tabItem}
                        onClick={() => {
                            window.open('https://app.parami.io', '_blank');
                        }}
                    >
                        {intl.formatMessage({
                            id: 'menu.app',
                        })}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;
