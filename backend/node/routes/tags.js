//example file to route
const router = require('express').Router()
const connection = require('../server')

//GET all tags
router.get('/tags/get', (req, res) => {
    connection.query('select * from db.tags', (err, result, fields) => {
        if (err) throw err
        res.send(JSON.stringify(result))
    })
})

//GET all tags from a question
router.get('/tags/get/:post_id', (req, res) => {
    var postid = req.param('post_id')

    connection.query('select * from db.tags inner join db.post_tags on tags.tag_id = post_tags.tag_id where post_tags.post_id = ?', postid, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

//POST create a tag for a question
router.post('/tags/post/:post_id', (req, res) => {
    var postid = req.param('post_id')
    var tag = {
        tag_name: req.body.tag_name
    }

    connection.query('insert into db.tags SET ?', tag, (err, result, fields) => {
        if(err) throw err

        connection.query('select * from db.tags', (err_in, result_in) => {
            if(err_in) throw err_in

            var post_tag = {
                post_id: postid,
                tag_id:result_in[0].tag_id
            }
            connection.query('insert into db.post_tags SET ?', post_tag, (err_n, result_n, fields_n) => {
                if(err_n) throw err_n
                res.send(JSON.stringify(result_n))
            })
        })

        // var post_tag = {
        //     post_id: postid,
        //     tag_id:result[0].tag_id
        // }
        // connection.query('insert into db.post_tags SET ?', post_tag, (err_n, result_n, fields_n) => {
        //     if(err_n) throw err_n
        //     res.send(JSON.stringify(result_n))
        // })
    })
})

module.exports = router