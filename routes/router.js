const express = require('express')
const router = express.Router()

//http://localhost:3001 => home page
router.get('/', (req, res)=> {
    // res.send('working...') => display home page
    res.render('pages/home',  {
        title: "John's Jokes App",
        name: "john's jokes app"
    })
})

router.use('/jokes', require('./api/jokesRoutes'))

// error handling
router.use((req, res, next) => {
    res.status(404).render('pages/404', {
        title: '404 Error',
        name: '404 Error. This page does not exist.'
    })
})

module.exports = router