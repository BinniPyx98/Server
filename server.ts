let express = require('express')
let MongoClient = require('mongodb').MongoClient

let app = express()
let db;
let ObjectID = require('mongodb').ObjectID
app.use(express.json());


app.get('/users', (req, res) => {
    db.collection('users').find().toArray((err, docs) => {
        if (err) {
            console.log(err)
            return res.sendStatus(500)
        } else {
            res.send(docs)
        }
    })
})

app.get('/users/:id', (req, res) => {
    db.collection('users').findOne({_id: ObjectID(req.params.id)}, (err, doc) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        }
        res.send(doc)
    })


})


app.post('/users', function (req, res) {

    let newUser = {

        name: req.body.name,

    }


    db.collection('users').insert(newUser, function (err, result) {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        }
        res.send(newUser)
    })

})

MongoClient.connect('mongodb+srv://XiLLeR:Kalina270698@cluster0.qckeb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (err, database) {
    if (err) {
        return console.log(err)
    }
    db = database.db('test')
    app.listen(3002, () => {
        console.log("Started")
    })
})