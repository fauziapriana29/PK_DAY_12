import React from 'react';  
import './App.css';
import Form from './Component/Form/form.jsx'
import Form1 from './Pages/form1.jsx'
import Number from './Pages/Number/Number.jsx'

function App() {
  return (
    <div>
      <Form/>
      <hr />
      <Form1 />
      <hr />
      <Number />
    </div>
  );
}

export default App;
