import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

const InfoBox = ({info}) => {
    let RAIN = "./public/rain.jpeg";
    let HOT = "./public/temp30.jpeg";
    let COOL = "./public/temp15.jpeg";
  return (
<div className="cardContener">
    <Card sx={{ maxWidth: 345 }} style={{marginTop:"5px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN : info.temperature > 15 ? HOT : COOL}
        title="Rain"
      />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.name}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Longitude - {info.long}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Latitude - {info.lat}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Temperature - {info.temperature}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Feels Like - {info.feelsLike}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Min Temp - {info.minTemp}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Max Temp - {info.maxTemp}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Humidity - {info.humidity}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Pressure - {info.pressure}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Sea Level - {info.seaLevel}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Grnd Level - {info.grndLevel}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Wind Speed - {info.windSpeed}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Weather - {info.weather}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Description - {info.description}
            </Typography>
        </CardContent>

    </Card>
</div>
    

  )
}

export default InfoBox