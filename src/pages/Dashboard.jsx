import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, FloatButton, notification, Form, Empty } from 'antd';
import AppHeader from '../components/Layout/AppHeader';
import Sidenav from '../components/Layout/Sidenav';
import CardComponent from '../components/CardComponent';
import AddPlaylistDrawer from '../components/AddPlaylistDrawer';
import { PlusOutlined } from '@ant-design/icons';
import { getDataUTS, sendData, deleteData } from '../utils/api';  // Tambahkan deleteData

const { Content } = Layout;

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);  // Tambahkan state loading
  const [activeGenre, setActiveGenre] = useState('all'); // Tambahkan state untuk genre aktif
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getDataPlaylists();
  }, []);

  const getDataPlaylists = () => {
    getDataUTS('/api/playlist/54')
      .then(resp => {
        if (resp && Array.isArray(resp.datas)) {
          setCards(resp.datas);
        } else if (Array.isArray(resp)) {
          setCards(resp);
        } else {
          setCards([]);
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.error(err);
      });
  };

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setEditData(null);
    form.resetFields();
  };

  const handleEdit = (data) => {
    setEditData(data);
    setDrawerOpen(true);
    form.setFieldsValue({
      title: data.play_name,
      'url youtube': data.play_url,
      'url thumbnail': data.play_thumbnail,
      genre: data.play_genre,
      description: data.play_description,
    });
  };

  const confirmDelete = (record) => {
    deleteData(`/api/playlist/${record.id_play}`)
      .then((resp) => {
        if (resp) {  // Sesuaikan dengan response API
          api.success({
            message: "Data Delete",
            description: "Playlist berhasil dihapus",
          });
          getDataPlaylists();
        } else {
          api.error({
            message: "Data Failed",
            description: "Gagal menghapus playlist",
          });
        }
      })
      .catch((err) => {
        api.error({
          message: "Error",
          description: "Terjadi kesalahan saat menghapus playlist",
        });
        console.error(err);
      });
  };

  const onFinish = (values) => {
    let formData = new FormData();
    formData.append('play_name', values.title);
    formData.append('play_url', values['url youtube']);
    formData.append('play_thumbnail', values['url thumbnail']);
    formData.append('play_genre', values.genre);
    formData.append('play_description', values.description);

    if (editData) {
      sendData(`/api/playlist/update/${editData.id_play}`, formData)
        .then((resp) => {
          if (resp?.datas) {
            form.resetFields();
            setDrawerOpen(false);
            getDataPlaylists();
            api.success({
              message: 'Sukses',
              description: 'Playlist berhasil diperbarui!',
            });
          } else {
            api.error({
              message: 'Gagal',
              description: 'Gagal memperbarui playlist!',
            });
          }
        })
        .catch((error) => {
          api.error({
            message: 'Error',
            description: 'Terjadi kesalahan saat memperbarui playlist!',
          });
          console.error(error);
        });
    } else {
      sendData('/api/playlist/54', formData)
        .then((resp) => {
          if (resp?.datas) {
            form.resetFields();
            setDrawerOpen(false);
            getDataPlaylists();
            api.success({
              message: 'Sukses',
              description: 'Playlist berhasil ditambahkan!',
            });
          } else {
            api.error({
              message: 'Gagal',
              description: 'Gagal menambahkan playlist!',
            });
          }
        })
        .catch((error) => {
          api.error({
            message: 'Error',
            description: 'Terjadi kesalahan saat menambah playlist!',
          });
          console.error(error);
        });
    }
  };

  // Handler untuk search
  const handleSearch = (value) => {
    setSearchQuery(value.toLowerCase());
  };

  // Gabungkan filter genre dan search
  const filteredCards = cards.filter(card => {
    const matchGenre = activeGenre === 'all' || card.play_genre.toLowerCase() === activeGenre.toLowerCase();
    const matchSearch = card.play_name.toLowerCase().includes(searchQuery);
    return matchGenre && matchSearch;
  });

  // Handler untuk mengubah genre aktif
  const handleGenreChange = (genre) => {
    setActiveGenre(genre);
  };

  return (
    <>
      {contextHolder}
      <Layout style={{ minHeight: '100vh' }}>
        <Sidenav onGenreChange={handleGenreChange} activeGenre={activeGenre} />
        <Layout>
          <AppHeader onSearch={handleSearch} />
          <Content style={{ margin: '24px', padding: '24px', background: '#fff', position: 'relative', borderRadius: '15px' }}>
            {filteredCards.length > 0 ? (
              <Row gutter={[24, 24]} justify="start">
                {filteredCards.map((item, index) => (
                  <Col key={item.id || index} xs={24} sm={12} md={8} lg={6} xl={6}>
                    <CardComponent data={item} onEdit={handleEdit} onDelete={confirmDelete} />
                  </Col>
                ))}
              </Row>
            ) : (
              <Empty
                description="Add content here, click '+' for create content"
                style={{
                  marginTop: '100px',
                  color: '#5C317D',
                  fontSize: '16px'
                }}
              />
            )}

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
    </>
  );
};

export default Dashboard;
