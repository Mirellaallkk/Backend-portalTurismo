const express = require('express');
const router = express.Router();
const contact = require('../controllers/contactController');
 
// Criar um novo contato
router.post('/', contact.createContact);

// Lista todos os contatos
router.get('/', contact.listContacts);
 
module.exports = router;
