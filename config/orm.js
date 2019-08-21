let connection = require("./connection");

let orm = {

    selectAll: function(callback) {

        const query = "SELECT * FROM burgers";
        connection.query(query, function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },
    insertOne: function(callback, burger) {
        const query = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(query, [burger], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },
    updateOne: function(callback, id) {
        const query = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(query, [id], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        })
    }
}

module.exports = orm;