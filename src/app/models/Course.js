const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
var mongoose_delete = require("mongoose-delete");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    _id: { type: Number },
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    _id: false,
    timestamps: true,
  },
);

CourseSchema.query.sortable = function (req) {
    if ('_sort' in req.query) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type)

        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc',
        })
    }
    return this;
}

mongoose.plugin(slug);

CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongoose_delete, { 
  deletedAt: true, 
  overrideMethods: "all"
});

module.exports = mongoose.model("Cource", CourseSchema);
