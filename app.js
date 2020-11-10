const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello World!')
})




const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))