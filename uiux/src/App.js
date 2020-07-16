import React from 'react';
import { connect } from 'react-redux';

import Form from './components/Form';
import Snapshot from './components/Snapshot';

const App = (props) => {
  return (
    <div className="App">
      <Form />
      <Snapshot />
    </div>
  );
}

export default connect(

)(App);
