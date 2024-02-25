import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Antes de la solicitud');
        const response = await axios.get('http://localhost:8000/ronald',{ credentials: 'include' });
        
        console.log('Después de la solicitud', response.data);
        setData(response.data);

        // Imprimir el mensaje en la consola del navegador
        console.log('Mensaje desde Laravel:', response.data);
      } catch (error) {
        console.error('Error al obtener datos desde Laravel', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mensaje de {data}
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
      </header>
    </div>
  );
}

export default App;
