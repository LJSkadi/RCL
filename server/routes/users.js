const express = require('express');
const router = express.Router();
const User = require('../models/user');
const List = require('../models/list');
const Component = require('../models/component');
const passport = require('passport');
const config = require('../configs/index');
const bcrypt = require('bcrypt');
const parser = require('body-parser');
const uploadCloud = require('../configs/cloudinary.js');

// // Bcrypt to encrypt passwords
const bcryptSalt = 10;

//#region DISPLAY PROFILE
//GET /Profile
router.get('/', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  User.find()
    .then((usersList) => {
      console.log(usersList)
      res.json({
        usersList
      });
    })
    .catch(err => next(err));
});
//#endregion

//#region DISPLAY PROFILE
//GET /Profile
router.get('/profile', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  User.findById(req.user._id)
  .populate({ path: '_listHost', populate: { path: '_components'}})
  .populate({ path: '_listBookmark', populate: { path: '_components'}})
    .then((user) => {
      console.log(user)
      res.json({
        user
      });
    })
    .catch(err => next(err));
});
//#endregion

//#region EDIT PROFILE
//POST /Profile
router.put('/profile', [passport.authenticate("jwt", config.jwtSession), uploadCloud.single('picture')], (req, res, next) => {
  console.log("This is req.bodyand req.file", req.body, req.file)
  console.log("This is the User-ID:" + req.user._id)
  const { name, github } = req.body;
  const userId = req.user._id;
  let pictureUrl = req.file ? req.file.url : req.user.profileImage;
  let updateInformation = {pictureUrl, name, github}

  User.findByIdAndUpdate(userId, updateInformation, { new: true })
    .then(user => {
      res.json({
        user
      });
    })
    .catch(err => next(err));
})
//#endregion

//#region DELETE PROFILE
//DELETE /Profile
router.delete('/profile', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  User.findByIdAndRemove(req.user._id)
    .then(() => {
      res.json({
        user
      });
    })
    .catch(err => next(err));
});
//#endregion

// Route to add a picture on one user with Cloudinary
// To perform the request throw Postman, you need
// - Endpoint: POST http://localhost:3030/api/first-user/users/pictures
// - Select: Body > form-data
// - Put as key: picture (and select "File")
// - Upload your file
// To perform the request in HTML:
//   <form method="post" enctype="multipart/form-data" action="http://localhost:3030/api/users/first-user/pictures">
//     <input type="file" name="picture" />
//     <input type="submit" value="Upload" />
//   </form>
// router.post('/first-user/pictures', parser.single('picture'), (req, res, next) => {
//   console.log('DEBUG req.file', req.file);
//   User.findOneAndUpdate({}, { pictureUrl: req.file.url })
//     .then(() => {
//       res.json({
//         success: true,
//         pictureUrl: req.file.url
//       })
//     })
// });

module.exports = router;