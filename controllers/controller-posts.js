const posts = require('../data/posts')

function index(req,res) {

    let postsFiltered = posts

    if (req.query.tag) {
        postsFiltered = posts.filter(post => post.tags.includes(req.query.tag))
    }
    
    res.json(postsFiltered);
}

function show(req,res) { 
    const post = posts.find(post => post.slug === req.params.id)

    if (!post) {
        return res.status(404).json({
            error: 'Error 404',
            message: 'Post not found'
        })
    }

    res.json(post)


}

function store(req,res) {

    const newPost = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.image
    }

    posts.push(newPost)

    console.log(posts);

    res.status(201)

    res.json(newPost)
    
}

function update(req,res) {
    res.send(`Update post with slug: ${req.params.slug}`);
}

function modify(req,res) {
    res.send(`Modify post with slug: ${req.params.slug}`);
}

function destroy(req,res) {
    const post = posts.find(post => post.slug === req.params.id)

    if (!post) {
        return res.status(404).json({
            error: 'Error 404',
            message: 'Post not found'
        })
    }

    posts.splice(posts.indexOf(post), 1)

    console.log(posts);
    
    res.sendStatus(204)

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
