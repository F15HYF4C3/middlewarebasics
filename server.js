const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors())
app.use(bodyParser.json())


app.use((request, response, next)=>{
    if(request.query.thing !== "banana"){
        response.status(401).send("Sorry bro you did not send me a banana")
    }else{
        next()
    }
})

app.use(express.static(`${__dirname}/public`))

app.get('/api/1', (request, response, next)=>{
    if(request.query.thing2 === 'coconut'){
        response.status(401).send("Sorry man I do not like coconuts")
    }else{
        next()
    }
}, (request, response, next)=>{
    console.log(request.query.thing)
    response.send('Hello')
})

app.get('/api/2', (request, response, next)=>{
    console.log(request.query.thing)
    response.send('Hello2')
})
app.get('/api/3', (request, response, next)=>{
    console.log(request.query.thing)
    response.send('Hello3')
})
app.get('/api/4', (request, response, next)=>{
    console.log(request.query.thing)
    response.send('Hello4')
})

app.get('/', (req, res, next) =>{ 
    res.redirect('./index.html')
})

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})