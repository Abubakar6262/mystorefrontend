import React, { useState } from 'react'
import { DashboardOutlined, ShoppingCartOutlined, UserOutlined, } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const items = [
    {
        key: '1',
        icon: <DashboardOutlined />,
        label: <Link to='/dashboard' className='text-decoration-none'>Dashboard</Link>
    },
    
    {
        key: '3',
        icon: <UserOutlined />,
        label: <Link to='/dashboard' className='text-decoration-none'>User</Link>
    },
    {
        key: '4',
        icon: <ShoppingCartOutlined/>,
        label: <Link to='/dashboard/orders' className='text-decoration-none'>Orders</Link>,
        children: [
            {
                key: '400',
                icon: <UserOutlined />,
                label: <Link to='/dashboard/orders' className='text-decoration-none'>Order List</Link>,
            },
            {
                key: '401',
                icon: <UserOutlined />,
                label: <Link to='/dashboard/orders/oderdetails' className='text-decoration-none'>Order Details</Link>,
            },
        ]
    },
    {
        key: '5',
        icon: <UserOutlined />,
        label: <Link to='/dashboard' className='text-decoration-none'>Products</Link>,
        children: [
            {
                key: '500',
                icon: <UserOutlined />,
                label: <Link to='/dashboard/products' className='text-decoration-none'>Add Product</Link>,
            },
            {
                key: '501',
                icon: <UserOutlined />,
                label: <Link to='/dashboard/products/manageproducts' className='text-decoration-none'>Manage Products</Link>,
            },
        ]
    },
    // getItem('OverView', '1', <PieChartOutlined />),
    // getItem('Orders', '2', <DesktopOutlined />),
    // getItem('User', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '3'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    // ]),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined />),
];
export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider className='sider-position pt-5' breakpoint="lg" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
}
