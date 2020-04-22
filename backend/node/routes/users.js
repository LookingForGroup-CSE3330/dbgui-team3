//example file to route
const router = require('express').Router()
const connection = require('../server')

router.get('/users/get', (req, res) => {
    connection.query('select * from db.users', (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    });
});

router.get('/users/get/:username', (req, res) => {
    connection.query('select * from db.users where username = ', (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result)) 
    });
});
router.get('/users/viewaccount/:username', (req, res) => {
       connection.query('select * from db.users where db.users.username = ', (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result)) 
    });
});
//create an account
router.post('/users/createaccount/', (req, res) => {
  var sqlstmnt = `INSERT INTO users(username, password_p, about_me, up_votes, down_votes) VALUES (\'${req.query.password}\', \'${req.query.username}\)`
  res.send(req.params);
    connection.query(sqlstmnt, function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});
//Delete a user
router.delete('/users/:username/delete', async (req, res) => {
  let sql = `DELETE FROM users WHERE username = ${req.params.username}`;
  console.log(sql);
    connection.query(sql,function (err, result, fields) {
        if (err)
            return console.error(error.message);
        res.end(JSON.stringify(result));
      });
});

module.exports = router