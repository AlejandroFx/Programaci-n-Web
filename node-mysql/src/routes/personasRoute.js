const express= require('express');
const routes= express.Router();

//Importar el controlador
const personasController= require('../controllers/personasController');

//Rutas


//GET

routes.get('/', personasController.listar);

routes.get('/:id', personasController.obtenerPersonas) /*Los puntitos indican que son parametro, si no 
tiene los puntitos pensará que la ruta literalmente se llama "/id"*/


//POST Agregar
routes.post('/', personasController.agregar)


//PUT Editar
routes.put('/:id', personasController.editar)

//DELETE Borrar
routes.delete('/:id',personasController.borrar)

module.exports =routes; 