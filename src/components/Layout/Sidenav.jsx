import React, { useState } from 'react';
import {
AppstoreOutlined,
  PlayCircleOutlined,
  VideoCameraOutlined,
  PlaySquareOutlined,
  ReadOutlined,
  MoreOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuOutlined,
  PlayCircleFilled,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('All', 'all', <AppstoreOutlined />),
  getItem('Songs', 'songs', <PlayCircleOutlined />),
  getItem('Video', 'video', <VideoCameraOutlined />),
  getItem('Movie', 'movie', <PlaySquareOutlined/>),
  getItem('Education', 'education', <ReadOutlined />),
  getItem('Other', 'other', <MoreOutlined />),
];

const Sidenav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    if (e.key === 'all') {
      setCollapsed((prev) => !prev);
    }
  };

  return (
    <Sider 
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={200} 
      style={{  background: '#5C317D',
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'auto',
          zIndex: 1000, 
        }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={['all']}
        mode="inline"
        items={items}
        style={{
          backgroundColor: '#5C317D',
          paddingTop: '60px',
          color: 'white',
          fontSize: '16px', // ukuran teks
          rowGap: '20px',
        }}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};

export default Sidenav;
