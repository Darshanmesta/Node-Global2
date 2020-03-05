var express= require('express')
var appRoute=express.Router()

var appControl= require('../controller/controller')


appRoute.get('/',appControl.index)
appRoute.get('/about',appControl.about)


module.exports=appRoute;