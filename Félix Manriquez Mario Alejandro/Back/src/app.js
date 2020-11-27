const express= require('express');
const cors = require('cors')


const app= express();
app.use(cors())


app.set('port', process.env.PORT || 3000 )


require('./config/connection')

//Midleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use(require('./routes/librosRoute'))



app.listen(app.get('port'), (error)=>{
    if(error){
        console.log('Error en el servidor: ', error);
    }else{
        console.log('Servidor en puerto: ', app.get('port'));
    }
})
