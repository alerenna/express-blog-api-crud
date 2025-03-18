const express = require('express')
const app = express()
const port = 3003
//Const for router post
const routerPosts = require('./routers/router-posts')
const serverError = require('./middlewares/serveError')
const error_404 = require('./middlewares/error_404')

//body-parser
app.use(express.json())

//Listen the server
app.listen(port, () => {
    console.log(`The server is running on port: http://localhost:${port}`);
})

//Routier posts
app.use('/api/v1/posts', routerPosts)

app.use(serverError)
app.use(error_404)