//example file to route
const router = require('express').Router()
const connection = require('../server')

router.get('/roles/get', (req, res) => {
    connection.query('select * from db.roles', (err, result) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

module.exports = router