var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');

router.use(bodyParser.json()); 

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

});*/

router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var role = req.body.role;
  var selection = req.body.selection;

  var sql = `INSERT INTO user_details(username, password, role, selection) VALUES ("${username}", "${password}", "${role}", "${selection}")`;
  db.query(sql, function(err, result) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json({'status': 'success', id: result.insertId})
  })
});

module.exports = router;
