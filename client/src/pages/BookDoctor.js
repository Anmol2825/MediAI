import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Modal, Button, DatePicker, TimePicker } from 'antd';

const { Meta } = Card;

const BookDoctor = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const doctors = JSON.parse(queryParams.get('doctors'));
  const specialtyOrDisease = queryParams.get('specialtyOrDisease');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    window.location.href = '/';
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <nav className="navbar" style={{ background: '#006262' }}>
        <div className="logo">
          <h2>
            <b style={{ color: 'white' }}>MediAi</b>
          </h2>
        </div>
      </nav>
      <div style={{ padding: '20px' }}>
        <h2 style={{ marginBottom: '16px', color: '#006262' }}>Book Doctor</h2>
        <p style={{ marginBottom: '16px' }}>
          Specialty or Disease: {specialtyOrDisease}
        </p>

        <h3 style={{ marginBottom: '16px', color: '#006262' }}>
          Available Doctors:
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              style={{ width: 300, margin: '10px', textAlign: 'left' }}
              hoverable
              actions={[
                <Button type="primary" onClick={showModal}>
                  Book
                </Button>,
              ]}
            >
              <Meta title={doctor} />
            </Card>
          ))}
        </div>

        <Modal
          title="Book Appointment (You will be directed to home page)"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Book Appointment"
        >
          <DatePicker
            style={{ width: '100%', marginBottom: '16px' }}
            placeholder="Select Date"
          />
          <TimePicker style={{ width: '100%' }} placeholder="Select Time" />
        </Modal>
      </div>
    </>
  );
};

export default BookDoctor;
