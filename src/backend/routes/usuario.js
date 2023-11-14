import express from 'express';
const router = express.Router();

// importar el modelo nota
import usuarioSchema from '../models/usuario';



router.post('/addUsuario', async(req, res) => {
  const body = req.body;  
  const usuario = usuarioSchema(body)
  console.log("addUsuario",usuario)       
  await usuario.save().then((result) => {
    res.json(
      {"Respuesta" : true

      }

    ) 
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

router.get('/getNumeroUsuarios', async(req, res) => {
  await usuarioSchema.countDocuments().then((result) => {
    res.json(result)
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);


router.get('/getUsuarioByID/:id', async(req, res) => {
  const id = req.params.id;  
 
  const filtro = {"_id":id}
      
  await usuarioSchema.findById(filtro)
  .then((result) => {
    res.json(result)
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

router.post('/getAllUsuarios', async(req, res) => {

  await usuarioSchema.find()
  .then((result) => {
    res.json(result)
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);
router.put('/updateUsuarioByNombre', async(req, res) => {
  const id = req.body.id;  
  const nombre = req.body.nombre;
 
  
  const filtro = {"_id":id}

  const cambio = {"nombre":nombre}
  //{new: true} retorna el documento modificado
  await usuarioSchema.findOneAndUpdate(filtro, cambio, {new: true})
  .then((result) => {
    res.json(result)
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);
router.delete('/deleteUsuarioByID', async(req, res) => {
  const id = req.body.id;  
  
  const filtro = {"_id":id}
  await usuarioSchema.deleteOne(filtro)
  .then((result) => {
    res.json(result)
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

module.exports = router;