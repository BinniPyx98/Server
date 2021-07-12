
let express=require('express')
let MongoClient=require('mongodb').MongoClient
let app=express()
app.use(express.json())

/*MongoClient.connect('mongodb+srv://XiLLeR:Kalina270698@cluster0.qckeb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',(error,database)=>{
    if(error){
        console.log(error)
    }
    else{

        app.listen(8080,()=>{
            console.log('Started')
        })
    }

})*/
   app.listen(80,()=>{
            console.log('Started')
        })

app.get('/',(req,res)=>{
    res.sendStatus(200)
})