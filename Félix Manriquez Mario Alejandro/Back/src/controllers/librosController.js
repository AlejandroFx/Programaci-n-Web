
const connection = require('../config/connection');

function listar(req, res) {
    if(connection){
        let sql = 'select * from Libros';
        connection.query(sql, (err, libros) => {
            if(err){
                res.send(err)
            } else {
                console.log(libros);
                res.json(libros);
            }
        })
    }
}

function obtenerLibros(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `select * from libros WHERE id= ${connection.escape(id)}`;
        connection.query(sql, (err, libros) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(libros === undefined || libros.length === 0)
                mensaje = "No se encontró el libro :(";

                res.json({error: false, data: libros, mensaje: mensaje})
            }
        })
    }
}

function agregarLibro(req, res){
    if(connection){
        const libro = req.body;
   

        let sql = 'INSERT INTO libros set ?';
        connection.query(sql, [libro], (err, rows) => {
            if(err) {
                res.json({err: true, data: rows, mensaje: "El libro no se agregó correctamente"})
            } else {
                res.json({err: false, data: rows, mensaje: "Libro agregado correctamente"})
            }
        })
    }
}


module.exports = {
    listar,
    obtenerLibros,
    agregarLibro
}
