const connection= require('../config/connection');

function listar (req, res){
    if(connection){
        let sql = 'select * from personas';
        connection.query(sql, (err, personas) =>{
            if(err){
                res.send(err)
            }else{
                console.log(personas);
                res.json(personas);
            }
        })
    }
}

function obtenerPersonas(req, res){

 if(connection){
 const {id}= req.params; //esto es const id= Objeto.id;
    let sql=`SELECT * FROM personas WHERE id= ${connection.escape(id)}` 
connection.query(sql, (error, persona)=>{
    if(error){
        res.json(error);
    }else{
        let mensajee = "";
        if(persona=== undifined || persona.length === 0)
        mensaje = "Persona no encontrada"
        res.json({error: false, data: persona, mensajee: mensaje})
    }
})
}
        

      
}

function agregar(req, res){
    if(connection){
        const persona= req.body;

        if(!persona.nombre){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"})
        }

        let sql= 'INSERT INTO personas set ?';
        connection.query(sql, [persona], (err, rows)=>{
            if(err){
                res.json(err)
            }else{
                res.json({error : false, data: rows, mensaje: "persona creada con éxito"})
            }
        })
    }
}

function editar(req, res){
    if(connection){
        const {id}= req.params;
        const persona = req.body;
        let sql = 'UPDATE personas set ? where id = ?';
        connection.query(sql, [persona, id], (err, rows)=>{
            if(err){
                res.json(err)
            }else{
                let mensaje ="";
                if(rows.changedRows ===0){
                    mensaje= "La información es la misma"
                } else{
                    mensaje = "Persona modificada con exito"
                }

                res.json({error: false, data: rows, mensaje: "Persona modificada con exito"})
            }
        })
    }
}

function borrar(req, res){
    if(connection){
        const {id}= req.params;
        const persona = req.body;
        let sql = 'DELETE from personas where id = ?';
        connection.query(sql, [id], (err, rows)=>{
            if(err){
                res.json(err)
            }else{
                let mensaje ="";
                if(rows.affectedRows ===0){
                    mensaje= "Persona no encontrada"
                } else{
                    mensaje = "Persona eliminada con exito"
                }

                res.json({error: false, data: rows, mensaje: "Persona eliminada con exito"})
            }
        })
    }
}

module.exports = {
    listar,
    obtenerPersonas,
    agregar,
    editar,
    borrar
}