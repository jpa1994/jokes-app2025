const express = require('express')
const router = express.Router()
const axios = require('axios')
const getJoke = require('../helpers/getJoke')

//http://localhost:3001 => home page
router.get('/', (req, res)=> {
    // res.send('working...') => display home page
    const url = 'https://api.sampleapis.com/jokes/goodJokes'

    axios.get(url)
        .then(resp => {
            // console.log(resp.data)
            // move to helper...
            // const randomJoke = resp.data[Math.floor(Math.random() * resp.data.length)]

            res.render('pages/home',  {
                title: "John's Jokes App",
                name: "john's jokes app",
                joke: getJoke(resp.data)
            })
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