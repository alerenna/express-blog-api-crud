const posts = require('../data/posts')

function index(req,res) {
    res.send('Show all the posts here');
}

function show(req,res) {
    res.send(`Show post with slug: ${req.params.slug}`);
}

function store(req,res) {
    res.send('Add a post');
}

function update(req,res) {
    res.send(`Update post with slug: ${req.params.slug}`);
}

function modify(req,res) {
    res.send(`Modify post with slug: ${req.params.slug}`);
}

function destroy(req,res) {
    res.send(`Delete post with slug: ${req.params.slug}`);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
