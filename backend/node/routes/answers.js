const router = require('express').Router()
const connection = require('../server')

//GET
router.get('/answers/get', (req, res) => {
    connection.query('select * from db.answers', (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//get all answers for a given question (post)
router.get('/answers/get/:post_id', (req, res) => {
    var post_id = req.param('post_id')
    connection.query('select * from db.answers where answers.post_id = ?', post_id, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//get all answers for a given user
router.get('/answers/get/:user_id',(req, res) => {
    var user_id = req.param('user_id')
    connection.query('select * from db.answers where answers.user_id = ?', user_id, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//POST
router.post('/answers/post/post_answer', (req, res) => {
    var answer = {
        //answer_id: req.body.answer_id,
        post_id: req.body.post_id,
        user_id: req.body.user_id,
        date: req.body.date,
        answer: req.body.answer
    }
    
    connection.query('insert into db.answers SET ?', answer, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

module.exports = router
