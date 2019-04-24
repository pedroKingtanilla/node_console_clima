const argv = require('./config/yargs').argv
const {lugarLatLng} = require('./geoLugar/lugar')
const {getClima} = require('./climaLugar/clima')
        

let lugarInfo = async (direccion)=>{

    let infoLugar = await lugarLatLng(direccion)

    let infoClima = await getClima(infoLugar.latitude, infoLugar.longitude)

    return{
        lugar: direccion,
        tiempo: infoClima.grados
    }
} 

lugarInfo(argv.direccion)
    .then((respuesta)=>{console.log(`el lugar ${respuesta.lugar}, tiene un clima de ${respuesta.tiempo}`)})
    .catch(err=>console.log);
