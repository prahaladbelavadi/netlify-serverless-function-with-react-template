import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");

  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)
    setMessage(response.data.title)
  }
  const fetchData2 = async () => {
    const response = await axios.get('/.netlify/functions/helloWorld')
    console.log(response)
    setMessage2(response.data.message)
  }
  useEffect(() => {
    fetchData()
    fetchData2()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {JSON.stringify(message)}
        {JSON.stringify(message2)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
