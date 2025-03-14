const express = require('express')
const app = express()
const port = 3003

app.listen(port, () => {
    console.log(`The server is running on port: http://localhost:${port}`);
})

//Index
app.get('/', (req,res) => {
    console.log('Show all the posts here');
})

//Show
app.get('/:id', (req,res) => {
    console.log(`Show post with slug: ${req.params.slug}`);
})

//Store
app.post('/', (req,res) => {
    console.log('Add a post');
})

//Update
app.put('/:id', (req,res) => {
    console.log(`Update post with slug: ${req.params.slug}`);
})

//Modify
app.patch('/:id', (req,res) => {
    console.log(`Modify post with slug: ${req.params.slug}`);
})

//Destroy
app.delete('/:id', (req,res) => {
    console.log(`Delete post with slug: ${req.params.slug}`);
})