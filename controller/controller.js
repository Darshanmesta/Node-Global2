var arr=['Darshan','Mesta']

module.exports={
    index:function(req,res){
        res.render('index',{info:arr})
    },

    about:function(req,res){
        res.render('about')
    }
}