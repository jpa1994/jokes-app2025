const express = require('express')
const router = express.Router()
const axios = require('axios')
const { paginationResults, buildJokeArr } = require('../../helpers/pagination')
const getGif = require('../../helpers/getGif')
const PORT = process.env.PORT || 3001

// http://localhost:3001/jokes
router.get('/', (req, res)=> {
    // res.send('This works.')
    const url = `https://api.sampleapis.com/jokes/goodJokes`
    /** pagination... */
    const pageData = paginationResults(req)
   
    // will store jokes in here
    let jokesArr = []

    axios.get(url)
        .then(resp => {
            
            // for (let i = pageData.startIdx; i < pageData.endIdx; i++) {
            //     if (resp.data[i] != undefined) {
            //         jokesArr = [...jokesArr, resp.data[i]]
            //     }
            // }

            // const prev = pageData.page > 1 ? pageData.page - 1 :null
            // const next = pageData.endIdx >= resp.data.length ? null : pageData.page + 1
            const jokeArrData = buildJokeArr(resp.data, jokesArr, pageData.startIdx, pageData.endIdx, pageData.page)

            // console.log(jokesArr)
        
            res.render('pages/allJokes', {
                title: 'All Jokes',
                name: 'All Jokes',
                data: jokeArrData.arr,
                prev: jokeArrData.prev,
                next: jokeArrData.next
            })
        })

})

// Joke Type
// localhost:3001/jokes
router.get('/type/:type', (req, res) => {

    const type = req.params.type
    const url = `https://api.sampleapis.com/jokes/goodJokes`
    const pageData = paginationResults(req)

    // We will filter through resp.data and store in typeArr
    let typeArr = []

    let jokesArr = []

    axios.get(url)
        .then(resp => typeArr = resp.data.filter(item => item.type == type))
        .then(typeArr => {

            const jokeArrData = buildJokeArr(typeArr, jokesArr, pageData.startIdx, pageData.endIdx, pageData.page)
            res.render('pages/allJokes', {
                title: type,
                name: `${type} jokes`,
                data: jokeArrData.arr,
                prev: jokeArrData.prev,
                next: jokeArrData.next
            })
        })
})

// Single joke
router.get('/:id', (req, res)=> {

    const id = req.params.id

    const url = `https://api.sampleapis.com/jokes/goodJokes/${id}`

    axios.get(url)
        .then(resp => {
            const joke = resp.data
            res.render('pages/singleJoke', {
                title: joke.setup,
                name: joke.setup,
                punchline: joke.punchline,
                gif: getGif()
            })
        })
})

module.exports = router