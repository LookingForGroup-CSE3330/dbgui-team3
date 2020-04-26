//example file to route
const router = require('express').Router()
const connection = require('../server')

router.get('/roles/get', (req, res) => {
    connection.query('select * from db.roles', (err, result) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

router.get('/user_roles/get', (req, res) => {
    connection.query('select * from db.user_roles', (err, result) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//POST a role for a user: this route is to be used in conjunction with signup route. Or there can also be a box in the profile page of the user that allows a user to either update or post a role for himself

router.post('/user_roles/post/:username', (req, res) => {
    var username = req.param('username')
    
    connection.query('select * from db.users where username = ?', username, (err, result) => {
        if(err) throw err

        var user_role = {
            usr_id: result[0].usr_id,
            role_id: req.body.role_id
        }

        connection.query('insert into db.user_roles SET ?', user_role, (err_n, result_n) => {
            if(err_n) throw err_n
            res.send(JSON.stringify(result_n))
        })
    })
})

//UPDATE a role for a user
router.put('/user_roles/update_role/:username', (req, res) => {
    var username = req.param('username')

    var role_name = req.body.role_name

    connection.query('select * from db.users where username = ?', username, (err, result) => {
        if(err) throw err

        connection.query('select * from db.roles where role_name = ?', role_name, (err_n, result_n) => {
            if(err_n) throw err_n
            var usr_id = result[0].usr_id

            connection.query('update db.user_roles set role_id = ? where usr_id = ?', [result_n[0].role_id, result[0].usr_id], (err_f, result_f) => {
                if(err_f) throw err_f
                res.send(JSON.stringify(result_f))
            })
        })
    })
})

module.exports = router