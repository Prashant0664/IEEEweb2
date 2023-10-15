const route = require('express').Router()
const {formit} = require('../db/data')

route.post('/',async (req,res)=>{
    const username1 = req.body.username
    const email1 = req.body.email
    const subject1 = req.body.subject
    const messege1 = req.body.messege

    if(!username1 || !email1 || !subject1 || !messege1){
        res.send('need of user details Not enough')
    }

    const newuser = await formit({
        name: username1,
        email: email1,
        subject: subject1,
        messege: messege1
    })

    newuser.save()
    res.send(newuser)
})

exports = module.exports = {
    routepost: route
}
