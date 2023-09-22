import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { hideLoading, showLoading } from '../redux/alertsSlice';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleSendVerificationCode = async () => {
    try {
      // Send a request to your backend to initiate sending the verification code
      const response = await axios.post('/api/send-verification-code', {
        phoneNumber,
      });
      // Handle response as needed (e.g., show success message)
      console.log(response.data);
    } catch (error) {
      console.error('Error sending verification code:', error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      // Send a request to your backend to verify the provided verification code
      const response = await axios.post('/api/verify-code', {
        phoneNumber,
        verificationCode,
      });
      // Handle response as needed (e.g., show success message)
      console.log(response.data);
    } catch (error) {
      console.error('Error verifying verification code:', error);
    }
  };

  const onFinish = async values => {
    try {
      dispatch(showLoading());
      const response = await axios.post('/api/user/login', values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.data);
        navigate('/');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Phone Number" name="phoneNumber">
            <Input
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </Form.Item>

          <Button
            className="primary-button my-2 full-width-button"
            onClick={handleSendVerificationCode}
          >
            SEND VERIFICATION CODE
          </Button>

          <Form.Item label="Verification Code">
            <Input
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={e => setVerificationCode(e.target.value)}
            />
          </Form.Item>

          <Button
            className="primary-button my-2 full-width-button"
            onClick={handleVerifyCode}
          >
            VERIFY CODE
          </Button>

          <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            LOGIN
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
