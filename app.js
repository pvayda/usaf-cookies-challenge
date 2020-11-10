const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())
/*
Create an Express application that sets a cookie when routed to /login with their name. 
If a cookie is present with a name key, then it says "Welcome {name}! when the user routes to /hello".
*/
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    if(req.cookies.name){
        return res.redirect(`/hello?name=${req.cookies.name}`);
    } else {
        var opts = {
            httpOnly: true
        }
        res.cookie('name', 'Chuck', opts )
        res.send('Hello')
    }
})

app.get('/hello', (req, res) => {
    let name = req.query.name
    res.send(`Welcome ${name}!`)
})




const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))