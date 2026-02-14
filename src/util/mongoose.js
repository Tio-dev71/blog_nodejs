const { default: mongoose } = require("mongoose");

module.exports = {
    mutipleMongooseToOject: function (mongooses) {
        return mongooses.map(mongooses => mongooses.toObject());
    },
    mongooseToObject: function  (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};