import React, { Component } from 'react';
import './Home.css';
import History from '../../components/History/History';
import Inicio from '../../components/Inicio/Inicio';
import Video from '../../components/Video/Video';
import Form from '../../components/Form/Form';

const Home = () => (
  <div>
    <Inicio />
    <History />
    <Video />
    <Form />
  </div>
);

export default Home;

  