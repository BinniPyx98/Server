
let express=require('express')
const {MongoClient} = require('mongodb');
let app=express()
app.use(express.json())

MongoClient.connect('mongodb+srv://XiLLeR:Kalina270698@cluster0.qckeb.mongodb.net/myFirstDatabase?authSource=admin',(error,database)=>{
    if(error){
        console.log(error)
    }
    else{

        app.listen(80,()=>{
            console.log('Started')
        })
    }

})

app.get('/',(req,res)=>{
    res.sendStatus(200)
})