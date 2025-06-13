import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AppHeader = ({ onSearch }) => {
  return (
    <div style={{
      position: 'sticky',   // agar tetap di atas
      top: 0,               // menempel di atas
      zIndex: 1001,         // di atas content
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      borderBottom: '1px solid #f0f0f0',
    }}>

      {/* KIRI: Judul dan Deskripsi */}
      <div>
        <h2 style={{
          margin: 0,
          fontWeight: 'bold',
          color: '#5C317D',
          letterSpacing: '0.5px'
        }}>
          Your Collection
        </h2>

        <p style={{ margin: 0, color: '#888' }}>All collection music, song, movie, education and others</p>
      </div>

      {/* KANAN: Search + User */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Input
          placeholder="Cari Koleksi..."
          onChange={(e) => onSearch(e.target.value)}
          style={{
            width: 250,
            borderRadius: 20,
            background: 'linear-gradient(to right, #5C317D, #7C4D9D)',
            color: 'white', // teks user
            border: 'none',
            padding: '4px 12px'
          }}
          className="custom-search-input"
        />

        <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          backgroundColor: '#5C317D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 18
        }}>
          <UserOutlined />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
