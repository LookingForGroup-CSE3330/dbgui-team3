//example file to route
const router = require('express').Router()
const connection = require('../server')

router.get('/', (req, res) => {
    res.send('routing successful')
})

router.get('/user', (req, res) => {
    connection.query("select * from db.users", (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

router.post('/add-user', (req, res) => {
    var user = {
        username: req.body.username,
        password_p: req.body.password_p,
        about_me: req.body.about_me
    }

    connection.query("insert into db.users SET ?", user, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

router.post('/add-tag', (req, res) => {
    var tag = {
        tag_name: req.body.tag_name
    }
    connection.query("insert into db.tags SET ?", tag, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

router.get('/tag', (req, res) => {
    connection.query("select * from db.tags", (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

module.exports = router