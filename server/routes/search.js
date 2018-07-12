var express = require('express');
const List = require('../models/list')
const Component = require('../models/component')
const passport = require('passport');
const config = require('../configs/index');
var router = express.Router();

//#region DISPLAY all components
//GET /Profile
router.get('/', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  Component.find()
  .populate('_owner')
    .then((component) => {
      res.json({
        success: true,
        component
      });
    })
    .catch(err => next(err));
});
//#endregion


module.exports = router;