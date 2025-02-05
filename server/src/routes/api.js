const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const serviceController = require('../controllers/serviceController');
const teamController = require('../controllers/teamController');
const userController = require('../controllers/userController');
const contactController = require('../controllers/contactController');
const authMiddleware = require('../middlewares/authMiddleware');

//Blog CRUD
router.post('/create-blog', blogController.createBlog);
router.get('/all-blog', blogController.allBlogRead);
router.get('/single-blog/:id', blogController.singleBlogRead);
router.post('/update-blog/:id', blogController.updateBlog);
router.post('/delete-blog/:id', blogController.deleteBlog);


//Service CRUD
router.post('/create-service', serviceController.CreateService);
router.get('/all-service', serviceController.ReadAllService);
router.get('/single-service/:id', serviceController.ReadSingleService);
router.post('/update-service/:id', serviceController.UpdateService);
router.post('/delete-service/:id', serviceController.DeleteService);

//Team CRUD
router.post('/create-team', teamController.CreateTeam);
router.get('/all-team', teamController.ReadAllTeam);
router.get('/single-team/:id', teamController.ReadSingleTeam);
router.post('/update-team/:id', teamController.UpdateTeam);
router.post('/delete-team/:id', teamController.DeleteTeam);


// User
router.post('/registration', userController.Register)
router.post('/login', userController.Login)
router.get('/profileDetails', authMiddleware, userController.ProfileDetails)


//Contact
router.post('/create-contact', contactController.CreateContact)

module.exports = router;