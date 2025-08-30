import { useState } from 'react'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const SearchBox = ({updateInfo}) => {

  const [city,setCity] = useState("");
  const [error,setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "797783b5b2f14f7dba8f45eff100a87a";

  let getWeatherInfo = async () => {
    // let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY});
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);  // for tempureture in celcius
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      let result = {
        long: jsonResponse.coord?.lon,
        lat: jsonResponse.coord?.lat,
        temperature: jsonResponse.main?.temp,
        feelsLike: jsonResponse.main?.feels_like,
        minTemp: jsonResponse.main?.temp_min,
        maxTemp: jsonResponse.main?.temp_max,
        humidity: jsonResponse.main?.humidity,
        pressure: jsonResponse.main?.pressure,
        seaLevel: jsonResponse.main?.sea_level ?? "N/A",
        grndLevel: jsonResponse.main?.grnd_level ?? "N/A",
        windSpeed: jsonResponse.wind?.speed,
        name: jsonResponse.name,
        weather: jsonResponse.weather?.[0]?.main,
        description: jsonResponse.weather?.[0]?.description
      };
      return result;
  }catch (err) {
      setError(true);
  }
}

  function handleButton(evt){
    setCity(evt.target.value)
  };

  let handleSubmit = async (evt) => {
    try {
        evt.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    } catch (err) {
        setError(true);
    }
  }
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3b0c61e65a2a3e15d0697ec7269a4ad4}

  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // https://api.openweathermap.org/data/2.5/weather?q={city}&appid={3b0c61e65a2a3e15d0697ec7269a4ad4}
  return (
    <form style={{display:"flex"}} onSubmit={handleSubmit}>

    
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 } }
      
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search For Location"
        inputProps={{ 'aria-label': 'search for location' }}
        id="city"
        onChange={handleButton}
        required
        value={city}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search"  >
        <SearchIcon />
      </IconButton>
      
    </Paper>
    <Button variant="contained" type="submit">Search</Button>  
    {error && <p style={{color:"red"}}>No Souch Place is Exist</p>}  
  </form>
  )
}

export default SearchBox