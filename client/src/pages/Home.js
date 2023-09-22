import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { Col, Row } from 'antd';
import Doctor from '../components/Doctor';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, hideLoading } from '../redux/alertsSlice';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/home.css';
function Home() {
  return (
    <Layout>
      <Carousel>
        <div className="" style={{ border: '1px solid red' }}>
          <img
            src={require('../pics/findDoctor.png')}
            style={{ height: '500px', width: '100%' }}
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
      <div className="card-container">
        <div className="card">
          <button className="btn">Click here</button>
        </div>
        <div className="card">
          <button className="btn">Click here</button>
        </div>
        <div className="card">
          <button className="btn">Click here</button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
