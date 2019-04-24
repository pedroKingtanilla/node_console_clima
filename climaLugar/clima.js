//api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8a96b814de38be7456ec2f863dc97cec&units=metric

const axios = require('axios')

const getClima = async (latitud, longitud)=>{
    /*
    const instance = axios.create({
        baseURL: `api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=8a96b814de38be7456ec2f863dc97cec&units=metric`,
        headers: {'X-RapidAPI-Key': '00865cc8c2mshe752f06640208fap1e892fjsn437da66ad89e'}
      });
    */
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=8a96b814de38be7456ec2f863dc97cec&units=metric`);
    
    console.log(resp.data.main.temp)
    
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