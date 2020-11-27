const express= require('express');
const routes= express.Router();


const librosController= require('../controllers/librosController');



routes.get('/', librosController.listar);

routes.get('/:id', librosController.obtenerLibros) 

module.exports =routes; 


//Agregar el libro (lo probé en postman :3)
routes.post('/', librosController.agregarLibro)

