// IMPORTIAMO EXPRESS E UTILIZZIAMO LA PARTE DI ROUTING
const express = require('express');
const router = express.Router();

// IMPORTIAMO LE FUNZIONI DEL CONTROLLER
const postController = require('../controllers/postController.js');



// ROTTE  CRUD
// INDEX
router.get('/', postController.index);

// SHOW
router.get('/:id', postController.show);

// STORE
router.post('/', postController.store);

// UPDATE
router.put('/:id', postController.update);

// MODIFY
router.patch('/:id', postController.modify);

// DESTROY
router.delete('/:id', postController.destroy);


// ESPORTIAMO IL MODULO ROUTER
module.exports = router;