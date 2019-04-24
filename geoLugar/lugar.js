const axios = require('axios')

const lugarLatLng = async (direccion)=>{

    let argumentoURL = encodeURI(direccion)
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${argumentoURL}`,
        headers: {'X-RapidAPI-Key': '00865cc8c2mshe752f06640208fap1e892fjsn437da66ad89e'}
      });
    
    const resp = await instance.get();
    const data = resp.data.Results

    if(data.length == 0){
        throw new Error(`No existen datos para ${direccion}`)
    }

    let latitude = data[0].lat;
    let longitude = data[0].lon;

    return{
        direccion,
        latitude,
        longitude
    }
}

module.exports = {
    lugarLatLng
}

