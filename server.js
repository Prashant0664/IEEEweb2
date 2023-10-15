const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 4422

// //connect to Mongodb
const dbURI = 'mongodb+srv://NitinPatel2001:mnPJjUKTHwRGHGsp@IEEE-data.pizgbuj.mongodb.net/IEEE_DTU?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})

const {routepost} = require('./Route/post')
app.use('/api/',routepost)
app.use('/',express.static(path.join(__dirname+'/public')))

