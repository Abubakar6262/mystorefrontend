import React from 'react';

import { Layout, theme } from 'antd';

//Components
import HandleDashRoute from './Routes';
import Sidebar from './components/Sidebar';


const { Header, Content, Footer } = Layout;

const year = new Date().getFullYear();

const Index = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                maxHeight: '100vh',
            }}
        >
            <Sidebar />
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        // background: colorBgContainer,
                        backgroundColor: '#465132'
                    }}
                >
                    <h1 className='text-center'>Hi! User</h1>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                        overflow: 'auto',
                    }}
                >

                    <div
                        style={{
                            marginTop: 20,
                            padding: 24,
                            minHeight: '76vh',
                            background: colorBgContainer,
                        }}
                    >
                        <HandleDashRoute />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Fashion Design &copy;{year} Created by Fashion design Developer
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Index
