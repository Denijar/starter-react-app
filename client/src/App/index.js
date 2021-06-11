import React, { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';

function App() {

  const [ responseMessage, setResponseMessage ] = useState("");

  useEffect(() => {
    axios.get('/api/hello').then((response) => {
      const body = response?.data?.body;
      setResponseMessage(body);
    })

  })

  return (
    <div className="App">
      <h1>Hello from the frontend!</h1>
      <h1>{responseMessage}</h1>
    </div>
  );
}

export default App;
