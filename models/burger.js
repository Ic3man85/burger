let orm = require('../config/orm');

let burger = {

    selectAll: function(callback) {

        orm.selectAll(function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: function(callback) {
        orm.insertOne(function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    updateOne: function(callback, id) {

        orm.updateOne(function(err, res) {
            if (err) throw err;
            callback(res);
        });
    }
}

module.exports = burger;