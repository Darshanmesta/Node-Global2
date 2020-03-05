var express=require('express')

var app=express()

app.use('/',require('./route'))

app.set('view engine','ejs')
app.set('views','./views')

app.listen(4000,function(){
    console.log("server started on port 4000")
})