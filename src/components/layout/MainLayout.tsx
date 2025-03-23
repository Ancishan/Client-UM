import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: "1",
    label: <NavLink to='/admin/dashboard'>DashBoard</NavLink>
  },
  {
    key: "2",
    label:"Profile"
  },
  {
    key: "3",
    label: "user management",
    children:[
      {
        key: "CreateAdmin",
        label: <NavLink to='/admin/create-admin'>Create Admin</NavLink>,
      },
      {
        key: "CreateFaculty",
        label: <NavLink to='/admin/create-faculty'>Create Faculty</NavLink>,
      },
      {
        key: "CreateStudent",
        label: <NavLink to='/admin/create-student'>Create Student</NavLink>,
      },
     
    ]
  }
]

const MainLayOut: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height: '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color: 'white', height:'3rem', display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <h1>Ph-University</h1>
        </div>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <h2></h2>
        <Header style={{ padding: 0, background:  "black" }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayOut;