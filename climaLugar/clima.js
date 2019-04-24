const axios = require('axios')

const getClima = async (latitud, longitud)=>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=8a96b814de38be7456ec2f863dc97cec&units=metric`);
        
    return {
        grados: resp.data.main.temp,
        humedad: resp.data.main.humidity,
        presion: resp.data.main.pressure,
        temp_min: resp.data.main.temp_min,
        temp_max: resp.data.main.temp_max,
    }

}

module.exports = {
    getClima
}