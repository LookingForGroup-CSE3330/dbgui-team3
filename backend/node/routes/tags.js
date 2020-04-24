//example file to route
const router = require('express').Router()
const connection = require('../server')

router.get('/tags/searchby/:tag', (req, res) => {
    connection.query('select * from db.posts inner join db.posts on db.tags where tags.tag_name = ?', (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

router.get('/tags/getquestiontags/:post_id', (req, res) => {
    connection.query('select * from db.post_tags inner join tags on post_tags.tag_id = tags.tag_d where post_tags.post_id = ?', (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

router.post('/tags/:tag', (req, res) => {
	var tags = {
		tag_id: req.params.tag_id
		tag: req.params.tag
	}  
    connection.query('insert into db.tags = SET ?', tags, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})

router.post('/tags/')



router.post('/tags/:post_id/:tag_id', (req, res) => {
   var tags {
   		id: req.params.id
   		post_id: req.params.post_id
   		tag_id: req.params.post_id
   }
       connection.query('insert into db.post_tags = SET ?', tags, (err, result, fields) => {
        if(err) throw err
        res.send(JSON.stringify(result))
    })
})


module.exports = router