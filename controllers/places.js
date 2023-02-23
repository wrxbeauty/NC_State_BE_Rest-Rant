const router = require('express').Router()
const places = require('../models/places')

router.get('/', (req, res) => {
    // res.send('GET /places')
    res.render('places/index', { places })
})

module.exports = router
