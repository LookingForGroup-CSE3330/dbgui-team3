//example file to route
const router = require('express').Router()
const connection = require('../server')

router.get('/', (req, res) => {
    res.send('routing successful')
})

router.get('/user', (req, res) => {
    connection.query("select * from db.users where usr_id = 1000", (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

module.exports = router