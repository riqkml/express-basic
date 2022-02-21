const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { text: 'awe' })
})
const userRouter = require('./routes/user')
app.use('/users', userRouter)

app.listen(3000)