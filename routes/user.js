const express = require('express')
const router = express.Router()

router.use(logger)
router.get('/', (req, res) => {
    res.send('user list')
})

router
    .route('/:id')
    .get((req, res) => {
        res.json(req.user)
    })

const users = [{ id: 1, name: "riqki", age: 21, birthdate: '15-05-2000', nationality: 'id' }, { id: 2, name: "awe", age: 21 }]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log('req', req.originalUrl)
    next()
}
module.exports = router