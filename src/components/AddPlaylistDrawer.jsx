import React from 'react';
import { Drawer, Form, Input, Button, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const AddPlaylistDrawer = ({ open, onClose, onFinish, form }) => {
  return (
    <Drawer
        title={<h2 style={{ color: 'white' }}>Add Playlist</h2>}
        placement="right"
        onClose={onClose}
        open={open}
        destroyOnClose
        bodyStyle={{ backgroundColor: '#5e2b97' }} // area isi
        headerStyle={{ backgroundColor: '#5e2b97' }} // area header
        closeIcon={<span style={{ color: 'white', fontSize: 18 }}>×</span>} // icon X jadi putih
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label={<span style={{ color: 'white' }}>Judul Playlist</span>}
          name="title"
          rules={[{ required: true, message: 'Masukkan judul playlist' }]}
        >
          <Input placeholder="Masukkan judul" style={{ color: '#333', fontWeight: 500 }}/>
        </Form.Item>

        <Form.Item
          label={<span style={{ color: 'white' }}>Url</span>}
          name="url"
          rules={[{ required: true, message: 'Masukkan URL' }]}
        >
          <Input placeholder="Contoh: https://..." style={{ color: '#333', fontWeight: 500 }}/>
        </Form.Item>

        <Form.Item
          label={<span style={{ color: 'white' }}>Genre</span>}
          name="genre"
          rules={[{ required: true, message: 'Pilih genre' }]}
        >
          <Select placeholder="Pilih genre" style={{ color: '#333', fontWeight: 500 }}>
            {/* 👇 Kamu bisa ubah/isi sesuai genre kamu */}
            <Option value="pop">Songs</Option>
            <Option value="rock">Video</Option>
            <Option value="jazz">Movie</Option>
            <Option value="lofi">Edication</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={<span style={{ color: 'white' }}>Description</span>}
          name="description"
        >
          <TextArea rows={4} placeholder="Tambahkan deskripsi..."style={{ color: '#333', fontWeight: 500 }} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
            backgroundColor: 'white',
            color: '#5e2b97',
            fontWeight: 'bold',
            width: '100%',
            border: 'none',
            }}
        >
            Tambah
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default AddPlaylistDrawer;
