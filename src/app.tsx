import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import ReactGA from 'react-ga';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import defaultSettings from '../config/defaultSettings';
import Loading from './components/Loading/Loading';
import { notification } from 'antd';
import { config } from './config/config';
import NoFoundPage from './pages/404';
import Header from './components/Header';

export const initialStateConfig = {
  loading: <Loading />,
};

export async function getInitialState(): Promise<{
  collapsed?: boolean | undefined;
  settings?: Partial<LayoutSettings>;
  loading?: boolean;
}> {
  ReactGA.initialize('G-1TNQLBFGEE');
  console.log("\n %c Made with ❤️ by Parami %c 一緒に、世界を変えよう！ \n\n", "color: #ff5b00; background: #fff; padding:5px 0;", "background: #ff5b00; padding:5px 0;");

  return {
    collapsed: false,
    settings: defaultSettings,
  };
}

export const request: RequestConfig = {
  errorHandler: (error: any) => {
    const { response } = error;

    if (!response) {
      notification.error({
        description: 'An exception has occurred in your network. Cannot connect to the server',
        message: 'Network exception',
      });
    }
    throw error;
  },
};

export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: true,
    footerRender: () => <Footer />,
    headerRender: (props) => (
      <>
        <Header props={props} />
      </>
    ),
    headerTitleRender: () => (
      <>
        <div
          className="headerLogo"
          onClick={() => {
            window.location.href = config.page.homePage;
          }}
        >
          <img src="/images/logo-text.svg" />
        </div>
      </>
    ),
    menuHeaderRender: () => (
      <>
        <div
          className="headerLogo"
          onClick={() => {
            window.location.href = config.page.homePage;
          }}
        >
          <img src="/images/logo-text.svg" />
        </div>
      </>
    ),
    menuExtraRender: () => (
      <>
        <div
          className="headerLogo"
          style={{
            display: 'block'
          }}
          onClick={() => {
            window.location.href = config.page.homePage;
          }}
        >
          <img src="/images/logo-text.svg" />
        </div>
      </>
    ),
    onPageChange: () => {
      setInitialState({ ...initialState, collapsed: true });
    },
    collapsed: initialState?.collapsed,
    onCollapse: (collapsed) => {
      setInitialState({ ...initialState, collapsed });
    },
    headerTheme: "light",
    headerHeight: 70,
    unAccessible: <NoFoundPage />,
    ...initialState?.settings,
  };
};
