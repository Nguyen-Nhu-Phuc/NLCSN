import express from 'express';
import CourseController from '../controllers/course.controller.js';


const router = express.Router();

router.post('/', CourseController.addCourse);
router.put('/', CourseController.editCourse);
router.delete('/', CourseController.deleteCourse);
router.get('/stored',CourseController.getAllCourse);

export default router;
