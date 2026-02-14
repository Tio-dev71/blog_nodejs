const Course = require('../models/Course');
const { mutipleMongooseToOject } = require('../../util/mongoose')

class MeController {
    //[Get] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([
            Course.find({}).sortable(req), 
            Course.countDocumentsDeleted()
        ])
            .then(([courses, deletedCount]) => 
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongooseToOject(courses)
                })
            )
            .catch(next);

        // Course.countDocumentsDeleted()
        //     .then(deletedCount => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => {});
        
        // Course.find({})
        //     .then(courses => 
        //         res.render('me/stored-courses', {
        //             courses: mutipleMongooseToOject(courses)
        //         }),
        //     )
        //     .catch(next);
    }

    trashCourses(reg, res, next) {
        Course.findDeleted({})
            .then(courses => 
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToOject(courses)
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
