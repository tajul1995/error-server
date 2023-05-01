const express = require('express')
const app = express()
const allServices = require('./data.json')
const  cors = require('cors')
const port = process.env.PORT || 5000
app.use(cors())
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/services',(req,res)=>{
    res.send(allServices)
}

)
app.get('/services/:id',(req,res)=>{
    const id = req.params.id
    const select = allServices.find(service=>service.id==id)
    res.send(select)
})
app.listen(port,()=>{
    console.log('its running on',port)
})