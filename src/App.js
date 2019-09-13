import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader'
import PageContent from './PageContent'
import PageFooter from './PageFooter'

import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageContent />
      <PageFooter />
    </div>
  );
}

export default App;
