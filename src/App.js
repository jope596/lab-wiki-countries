import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import countries from './countries.json';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get(' https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountry(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  return (
    <div className="App">
      <div className="App-main">
     
        <Navbar countries={country}/>
      
        </div>
        <Routes>
        <Route path='/' element={<CountriesList countries={country} />}/>
        <Route path=":alpha3Code" element={<CountryDetails countries={country} />}/>
        </Routes>
   
     
        
      </div>
    );
   
  }
export default App;
