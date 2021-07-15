let fs=require('fs')
let express=require('express')
const {MongoClient} = require('mongodb');
let app=express()
app.use(express.json())

MongoClient.connect('mongodb+srv://XiLLeR:Kalina270698@cluster0.qckeb.mongodb.net/myFirstDatabase?authSource=admin',(error,database)=>{
    if(error){
        console.log(error)
    }
    else{

        app.listen(8000,()=>{
            console.log('Started up')
        })
    }

})

app.get('/u',(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('./build/index.html',null,(err,data)=>{
        if(err){
            res.sendStatus(404)
        }
        else{
            res.write('Write')
            res.write(data)
        }

    })
})