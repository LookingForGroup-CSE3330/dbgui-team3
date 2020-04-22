//example file to route
const router = require('express').Router()
const connection = require('../server')

router.get('/users/get', (req, res) => {
    connection.query('select * from db.users', (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

router.get('/users/get/:username', (req, res) => {
    var user_name_query = req.param('username')
    connection.query('select * from db.users where db.users.username = ?', user_name_query, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result)) 
    })
})
router.get('/users/viewaccount/:username', (req, res) => {
       connection.query('select * from db.users where db.users.username =  ${req.params.username}', (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))   
    })  
})
//create an account
router.post('/users/createaccount/', (req, res) => {
   var account = {
        username: req.body.username,
        password_p: req.body.user_id,
        about_me: req.body.about_me,
    }
    connection.query('insert into db.users SET ?', account, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})
//Delete a user
router.delete('/users/:username/delete', async (req, res) => {
  let sql = `DELETE FROM db.users WHERE db.username = ${req.params.username}`;
  console.log(sql);
    connection.query(sql,function (err, result, fields) {
        if (err)
            return console.error(error.message);
        res.end(JSON.stringify(result));
      })
})

module.exports = router