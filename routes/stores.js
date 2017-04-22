var User = require("../models/user.js")

var stores = {

  getAll: function(req, res) {
    console.log(User)
    User.getAllll(function(err, rows){
       if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    }); 
  },

  getOne: function(req, res) {
    var id = req.params.id;
    var store = data[0]; // Spoof a DB call
    res.json(store);
  },

  create: function(req, res) {
    var newProduct = req.body;
    data.push(newStore); // Spoof a DB call
    res.json(newStore);
  },

  update: function(req, res) {
    var updateStore = req.body;
    var id = req.params.id;
    data[id] = updateStore // Spoof a DB call
    res.json(updateStore);
  },

  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};

var data = [{
  name: 'store 1',
  id: '1'
}, {
  name: 'store 2',
  id: '2'
}, {
  name: 'store 3',
  id: '3'
}];

module.exports = stores;
