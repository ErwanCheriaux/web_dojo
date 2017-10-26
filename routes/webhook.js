var express = require('express');
var serverChatService = require('../server/chatService');
var router = express.Router();

/* GET hello world page. */
router.get('/', function(req, res, next) {
  verif = serverChatService.authenticate(req);
  if(verif) res.status(200).send(req.query['hub.challenge']);
  else     res.sendStatus(403);
  res.render('index');
});

module.exports = router;
