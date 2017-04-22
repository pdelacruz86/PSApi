var db = require('../db')

var Store = {
  getAll: function(callback){
    return db.query("select * from users", callback);
  },
  getOne: function(id, callback){
    return db.query("select * from users where id= ?", [id], callback);
  },
  create: function(user, callback){
    return db.query("insert into users values (?,?,?,?)", [user.userName, user.name, user.lastName, user.password])
  },
  update: function(id, user, callback){
    return db.query("update users set userName=?, name=? lastName=?",[user.userName, user.name, user.lastName])
  },
  delete: function(id, callback){
    return db.query("delete from users where id=?",[id], callback);
  }

}

module.exports = Store;