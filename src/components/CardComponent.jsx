import React from 'react';
import { EditOutlined, DeleteOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Card, Popconfirm } from 'antd';

const { Meta } = Card;

const CardComponent = ({ data, onDelete, onEdit }) => {

  const confirmDelete = () => {
    if (onDelete) {
      onDelete(data);
    }
  };

  // Fungsi untuk menangani klik pada tombol play
  const handlePlay = () => {
    // Pastikan url youtube valid

    window.open(data.play_url, '_blank', 'noopener,noreferrer');
  };
  
  // Jika onEdit diberikan, gunakan itu untuk menangani klik edit
  const handleEdit = () => {
    if (onEdit) {
      onEdit(data);
    }
  };

  return (
    <Card
      className="custom-purple-card"
      style={{
        border: 'none', // hilangkan border default
        boxShadow: '0 8px 24px 0 rgba(34, 34, 87, 0.18)',
        borderRadius: 16,
        overflow: 'hidden', // agar gambar tidak keluar dari card
        height: 300,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      bodyStyle={{ color: '#fff' }}
      cover={
        <img
          alt={data.play_name}
          src={data.play_thumbnail}
          style={{
            height: 140,
            width: '100%',
            objectFit: 'cover',
            margin: 0,
            border: 'none',
            display: 'block',
            padding: 0,
          }}
        />
      }
      
      actions={[
        <span key="play" onClick={handlePlay} style={{ color: '#fff' }}>
          <PlayCircleOutlined />
        </span>,
        <span key="edit" onClick={handleEdit} style={{ color: '#fff' }}>
          <EditOutlined />
        </span>,

        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={confirmDelete}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined style={{ color: '#fff'}} />
        </Popconfirm>,
      ]}
    >
      <Meta
        title={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {data.play_name}
          </div>
        }
        description={
          <div style={{
            maxHeight: 40,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {data.play_description}
          </div>
        }
        
      />
    </Card>
  );
};

export default CardComponent;
