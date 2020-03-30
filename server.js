const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log('listening on port 8080...'))