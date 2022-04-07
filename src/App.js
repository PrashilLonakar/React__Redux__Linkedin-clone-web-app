import React from 'react';
import './App.css';

import Header from './core/components/layout/Header/Header';
import Sidebar from './core/components/layout/Sidebar/Sidebar';
import Feed from './main/feed/Feed';

function App() {
  return (
    <div className="app">
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
