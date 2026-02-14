const Course = require('../models/Course');
const { mutipleMongooseToOject } = require('../../util/mongoose')

class SiteController {

    index(reg, res, next) {    
        Course.find({})
            .then(courses => {                
                res.render('home', {
                    courses: mutipleMongooseToOject(courses)
                });
            })
            .catch(next);
        
    }

    //[Get]/Search
    search(reg, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
