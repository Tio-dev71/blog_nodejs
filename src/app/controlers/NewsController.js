class NewsController {
    //[Get]/news
    index(reg, res) {
        res.render('news');
    }

    //[Get]/news/:slug
    show(reg, res) {
        res.send('NEWDETAIL!');
    }
}

module.exports = new NewsController();
