const router = require('express').Router()
const connection = require('../server')

//GET
router.get('/posts/get', (req, res) => {
    connection.query('select * from db.posts', (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//get list of posts that a given user has asked.
router.get('/posts/get/:username', (req, res) => {
    var user_name = req.param('username')
    connection.query(
    'select * from db.posts inner join db.users on posts.user_id = users.usr_id where users.username = ?', user_name, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//get request for getting a single post (question) by its id? whenever you get the chance
router.get('/posts/getbyid/:post_id', (req, res) => {
    var postid = req.param('post_id')
    connection.query('select * from db.posts where post_id = ?', postid, (err,result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//POST
router.post('/posts/post', (req, res) => {
    var post = {
        //post_id: req.body.post_id,
        user_id: req.body.user_id,
        creation_date: req.body.creation_date,
        viewCount: req.body.viewCount,
        answer_count: req.body.answer_count,
        question: req.body.question
    }

    connection.query('insert into db.posts SET ?', post, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//UPDATE upvote
router.put('/posts/update_upvotes/:post_id', (req, res) => {
    var postid = req.param('post_id')

    connection.query('update db.posts set up_votes = up_votes + 1 where post_id = ?', postid, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

module.exports = router
