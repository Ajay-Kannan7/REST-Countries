import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Country from './components/countries/country';
import CountryDetails from './components/country-details/countryDetails';
import axios from 'axios'
function App() {

  let [countryData,countryAssigner]=useState({
    data:null
  })

  let actualData;
  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
      .then(res=>{
        countryAssigner({
          data:res.data
        })
      })
      .catch(err=>{
        console.log(err)
      })
  },[])

  if(countryData.data===null){
    return
  }else{
    actualData=countryData.data
  }

  return (
    <div className="App">
      <BrowserRouter>
      <div className="nav-bar">
        <h1>Where in the world?!</h1>
      </div>
      <Routes>
        <Route path="/" element={<Country data={actualData}/>}></Route>
        <Route path="/:name" element={<CountryDetails data={actualData}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
