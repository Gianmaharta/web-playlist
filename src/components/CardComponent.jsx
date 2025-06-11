import React from 'react';
import { EditOutlined, DeleteOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const { Meta } = Card;

const CardComponent = ({ data }) => {
  const handleDelete = () => {
    console.log('Delete clicked for', data.title);
  };

  const handlePlay = () => {
    console.log('Play clicked for', data.title);
  };

  return (
    <Card
    className="custom-purple-card"
      style={{
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#5C317D',
        color: '#fff',
        border: '1px solid #fff',
      }}
      bodyStyle={{ color: '#fff' }}
      cover={
        <img
          alt="cover"
          src={data.image || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'} //ini source imagenya
          style={{ objectFit: 'cover', height: 160 }}
        />
      }
      actions={[
        <span key="play" onClick={handlePlay} style={{ color: '#fff' }}>
            <PlayCircleOutlined />
        </span>,
        <span key="edit" style={{ color: '#fff' }}>
            <EditOutlined />
        </span>,
        <span key="delete" onClick={handleDelete} style={{ color: '#fff' }}>
            <DeleteOutlined />
        </span>,
    ]}
    >
      <Meta
        title={<span style={{ color: '#fff' }}>{data.title || 'Judul Default'}</span>}
        description={<span style={{ color: '#fff' }}>{data.description || 'Deskripsi kosong.'}</span>}
      />
    </Card>
  );
};

export default CardComponent;
