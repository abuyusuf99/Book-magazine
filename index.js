const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

app.use(require('./routes/book.route'))
app.use(require('./routes/genre.route'))
app.use(require('./routes/review.route'))
app.use(require('./routes/author.route'))

mongoose.connect("mongodb+srv://Muslim:***Muslim95@cluster0.b4yowf9.mongodb.net/Magazine?retryWrites=true&w=majority")
.then(()=>{
    console.log("Успешно соединились с сервером MongoDB");
})
.catch(()=>{
    console.log('Не удалось подключиться к серверу MongoDB');
})
app.listen(1000, ()=>{
    console.log("Сервер подключен");
})
