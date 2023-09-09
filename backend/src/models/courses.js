import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    name: {
        type: String
    },

    description: {
        type: String
    },

    image: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
},
    { collection: 'Course' })

const CourseModel = mongoose.model('Course', CourseSchema);

export default CourseModel;