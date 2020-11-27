const express= require('express');
const cors = require('cors')

//inicializar express
const app= express();
app.use(cors())

//configuraciones
app.set('port', process.env.PORT || 3000 )

//Base de datos
require('./config/connection')

//Midleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Ruta
/*app.get('/hola', (req, res) =>{
    //En mensaje comun
    res.send('Hola')

    //En formato json
    res.json({mensaje: "hola"})
    
    })*/
app.use(require('./routes/personasRoute'))





//Levantar el servidor
app.listen(app.get('port'), (error)=>{
    if(error){
        console.log('Ha ocurrido un error: ', error);
    }else{
        console.log('Servidor en puerto: ', app.get('port'));
    }
})
