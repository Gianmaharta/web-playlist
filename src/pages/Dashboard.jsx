import React, { useState } from 'react';
import { Layout, Row, Col, FloatButton, Drawer, Form, Input, Button } from 'antd';
import AppHeader from '../components/Layout/AppHeader';
import Sidenav from '../components/Layout/Sidenav';
import CardComponent from '../components/CardComponent';
import AddPlaylistDrawer from '../components/AddPlaylistDrawer';
import { PlusOutlined } from '@ant-design/icons';

const { Content } = Layout;

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    form.resetFields();
  };

  const onFinish = (values) => {
    const newCard = {
      id: Date.now(),
      ...values,
    };
    setCards([...cards, newCard]);
    closeDrawer();
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidenav />
      <Layout >
        <AppHeader />
        <Content style={{ margin: '24px', padding: '24px', background: '#fff', position: 'relative' }}>
          <Row gutter={[24, 24]} justify="start">
            {cards.map((item, index) => {
              console.log('Rendering card:', item); // 👈 Tambahkan log di sini
              return (
                <Col
                  key={item.id || index}
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={6}
                >
                  <div style={{ padding: '4px' }}>
                    <CardComponent data={item} />
                  </div>
                </Col>
              );
            })}
          </Row>


          {/* FloatButton */}
          <FloatButton
              icon={
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                }}>
                  <PlusOutlined style={{ color: 'white', fontSize: 32 }} />
                </div>
              }
              onClick={showDrawer}
              className="custom-float-button"
              style={{
                right: 24,
                bottom: 24,
                backgroundColor: '#5e2b97',
                border: 'none',
                width: 64,      // Tambahkan ini untuk memperbesar tombol
                height: 64,     // Tambahkan ini untuk memperbesar tombol
              }}
            />


          {/* Drawer */}
          <AddPlaylistDrawer 
            open={drawerOpen}
            onClose={closeDrawer}
            onFinish={onFinish}
            form={form}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
