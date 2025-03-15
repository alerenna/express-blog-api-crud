const express = require('express')
const router = express.Router()

//Index
router.get('/', (req,res) => {
    res.send('Show all the posts here');
})

//Show
router.get('/:id', (req,res) => {
    res.send(`Show post with slug: ${req.params.slug}`);
})

//Store
router.post('/', (req,res) => {
    res.send('Add a post');
})

//Update
router.put('/:id', (req,res) => {
    res.send(`Update post with slug: ${req.params.slug}`);
})

//Modify
router.patch('/:id', (req,res) => {
    res.send(`Modify post with slug: ${req.params.slug}`);
})

//Destroy
router.delete('/:id', (req,res) => {
    res.send(`Delete post with slug: ${req.params.slug}`);
})

module.exports = router