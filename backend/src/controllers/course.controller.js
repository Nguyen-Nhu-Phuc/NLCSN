import Course from '../models/courses.js';

const CourseController = {
    // [POST] /api/course
    addCourse: async(req, res) => {
        try {
            const newCourse = new Course(req.body);
            const saveCourse = await newCourse.save();
            res.status(201).json(saveCourse);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    // [PUT] /api/course
    editCourse: async(req, res) => {
        const {id, name, description, image} = req.body;
        try {
            const course = await Course.findOneAndUpdate({
                _id: id
            }, {name, description, image}, {new: true});
            res.status(200).json(course);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    // [DELETE] /api/course
    deleteCourse: async(req, res) => {
        const {id} = req.body;
        try {
            const course = await Course.findByIdAndDelete(id);
            res.status(200).json(course);
        }catch(err) {
            res.status(500).json(err);
        }
    }
};

export default CourseController;