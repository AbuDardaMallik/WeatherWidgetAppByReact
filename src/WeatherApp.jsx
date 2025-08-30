import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

const WeatherApp = () => {
    const [weathearInfo,setWeathearInfo] = useState({
        name:"Kolkata",
        long : 88.3697,
        lat : 22.5697,
        temperature : 28.77,
        feelsLike : 34.31,
        minTemp : 28.77,
        maxTemp : 28.77,
        humidity : 81,
        pressure : 999,
        seaLevel : 999,
        grndLevel : 998,
        windSpeed : 3.24,
        weather : "Clouds",
        description : "overcast clouds",
    });
    let updateInfo = (result) => {
        setWeathearInfo(result);
    }
  return (
    <>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info = {weathearInfo}/>
    </>
    
  )
}

export default WeatherApp