//example file to route
const router = require('express').Router()
const connection = require('../server')
const bcrypt = require('bcrypt')

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
       connection.query(`select * from db.users where db.users.username =  ${req.params.username}`, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))   
    })       
})

//GET about_me: USE THIS FOR UPDATING ABOUT_ME
router.get('/users/get_aboutme/:username', (req, res) => {
    var username = req.param('username')
    connection.query('select about_me from db.users where username = ?', username, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//Edit functionalities for a user's profile

//UPDATE username
router.put('/users/update_username/:username', (req, res) => {
    var username_old = req.param('username')
    var username_new = req.body.username

    connection.query('update db.users set username = ? where username = ?', [username_new, username_old], (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//UPDATE  password
router.put('/users/update_password/:username', (req, res) => {
    var username = req.param('username')
    var password_new = req.body.password_p
    bcrypt.hash(password_new, 0, (err, hash) => {
        if(err) throw err
        else {
            connection.query('update db.users set password_p = ? where username = ?', [hash, username], (err, result, fields) => {
                if(err) throw err
                res.send(JSON.stringify(result))
            })
        }
    })
})

//UPDATE about me
router.put('/users/update_aboutme/:username', (req, res) => {
    var username = req.param('username')
    var about_me = req.body.about_me

    connection.query('update db.users set about_me = ? where username = ?', [about_me, username], (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//UPDATE profile image
router.put('/users/update_profileimg/:username', (req, res) => {
    var username = req.param('username')
    var profile_img = req.body.profile_img
    connection.query('update db.users set profile_img = ? where username = ?', [profile_img, username], (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//UPDATE email
router.put('/users/update_email/:username', (req, res) => {
    var username = req.param('username')
    var email = req.body.email
    connection.query('update db.users set email = ? where username = ?', [email, username], (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//UPDATE credentials
router.put('/users/update_credentials/:username', (req, res) => {
    var username = req.param('username')
    var credentials = req.body.credentials
    connection.query('update db.users set credentials = ? where username = ?', [credentials, username], (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//USER Authentication   

//Signup (includes password hashing so we dont store plaintext passwords in the db)
router.post('/users/signup/', (req, res) => {
    //check if username already exists
    connection.query('select * from db.users where users.username = ?', req.body.username, (err, result) => {
        if(err) throw err
        else {
            if(result && result.length) {
                console.log("username found.")
                res.send("username already exists")
            } else {
                bcrypt.hash(req.body.password_p, 0, (err, hash) => {
                    if(err) throw err
                    else {
                        var account = {
                            username: req.body.username,
                            password_p: hash,
                            about_me: req.body.about_me,
                            profile_img: req.body.profile_img,
                            email: req.body.email,
                            credentials: req.body.credentials
                        }
                        connection.query('insert into db.users SET ?', account, (err, result, fields) => {
                            if(err) throw err
                            res.send(JSON.stringify(result))
                        })
                    } //end else
                })
            }
        }//end nested else clause
    })
})

//Login: with JWT auth
router.post('/users/login/', (req, res) => {
    var username = req.body.username
    var password = req.body.password_p    

    connection.query('select * from db.users where users.username = ?', username, (err, result) => {
        if(err) throw err
        else {  
            if(result && result.length) {
                //username match
                bcrypt.compare(password, result[0].password_p, (err, result2) => {
                    if(err) res.status(401).send("authorization failed_error")
                    if(result2) { 
                        res.status(200).json({
                            message: "Auth successful"  
                        })
                    }
                    res.status(401).json({
                        message: 'authorization failed. wrong password'
                    })
                })
            } else {  
                //no matching username. no logging in for u
                res.status(401).send("authorization failed. no matching username")
            }
        }

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

//return user's type   s
router.get('/users/get_type/:username', (req, res) => {
    var username = req.param('username')
    connection.query('select usr_id from db.users where username = ?', username, (err, result, fields) => {
        if(err) throw err
        connection.query('select role_id from db.user_roles where usr_id = ?', result[0].usr_id, (err_n, result_n, fields_n) => {
            if(err_n) throw err_n
            connection.query('select role_name from db.roles where role_id = ?', result_n[0].role_id, (err_f, result_f, fields_f) => {
                if(err_f) throw err_f
                res.send(JSON.stringify(result_f))
            })
        })
    })
})    

module.exports = router