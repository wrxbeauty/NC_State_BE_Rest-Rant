require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places.js'))

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('home')
})

app.get('*', (req, res) => {
    // res.status(404).send('<h1>404 Page</h1>')
    res.render('error404')
})

app.listen(process.env.PORT)
