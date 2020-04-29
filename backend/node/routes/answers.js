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
router.get('/answers/get-byname/:user_id',(req, res) => {
    var user_id = req.param('user_id')
    connection.query('select * from db.answers where answers.user_id = ?', user_id, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//get all answers for a given question SORTED by votes
router.get('/answers/get_bypost_vote/:post_id', (req, res) => {
    var postid = req.param('post_id')
    connection.query('select * from db.answers where answers.post_id = ? order by answers.up_votes DESC', postid, (err, result) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//get all answers for a given question sorted recent
router.get('/answers/get_bypost_date/:post_id', (req, res) => {
    var postid = req.param('post_id');
    connection.query(`select * from db.answers where answers.post_id = ? ORDER BY str_to_date(answers.date, '%m/%d/%Y') DESC`, postid, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//get all answers for a given user SORTED by votes
router.get('/answers/get_byuser_sort/:user_id', (req, res) => {
    var userid = req.param('user_id')
    connection.query('select * from db.answers where answers.user_id = ? order by answers.up_votes DESC', userid, (err, result) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//Search for an answer by keywords
router.get('/answers/search/:key', (req, res) => {
    var keyword = req.param('key')
    connection.query('select * from db.answers where answer LIKE CONCAT("%", ?, "%")', keyword, (err, result) => {
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

//UPDATE upvotes
router.put('/answers/update_upvotes/:answer_id', (req, res) => {
    var answerid = req.param('answer_id')

    connection.query('update db.answers SET up_votes = up_votes + 1 where answer_id = ?', answerid, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//UPDATE downvotes
router.put('/answers/update_downvotes/:answer_id', (req, res) => {
    var answerid = req.param('answer_id')

    connection.query('update db.answers SET down_votes = down_votes + 1 where answer_id = ?', answerid, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//delete answer
router.delete('/answers/delete/:answer_id', (req, res) => {
    var answerid = req.param('answer_id')

    connection.query('delete from db.answers where answer_id = ?', answerid, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

module.exports = router
