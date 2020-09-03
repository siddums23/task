var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

router.use(bodyParser.json()); 

router.post('/', function(req, res, next) {
  
  MongoClient.connect('mongodb://localhost:27017/', function (err, client) {
    if (err) throw err

    var db = client.db('database1')
    var user_details_collection = db.collection('user_details')
    /*db.createCollection("user_details", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      //db.close();
    });*/

    user_details_collection.insertOne({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
      selection: req.body.selection
    }, function(error, response) {
      if (error) throw error;
      console.log("1 document inserted");
      res.json({'status': 'success'})
      //db.close();
    });

  })

});

module.exports = router;


