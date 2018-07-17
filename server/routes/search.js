var express = require('express');
const List = require('../models/list')
const Component = require('../models/component')
const passport = require('passport');
const config = require('../configs/index');
var router = express.Router();

//#region DISPLAY all components
//GET /Component
router.get('/', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let searchTerm = req.body;
  Component.find()
  .populate('_owner')
    .then((components) => {
      res.json({
        success: true,
        components
      });
    })
    .catch(err => next(err));
});
//#endregion

//#region DISPLAY all components
//GET /Component
router.get('/all', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  Component.find()
  .populate('_owner')
    .then((components) => {
      res.json({
        success: true,
        components
      });
    })
    .catch(err => next(err));
});
//#endregion

module.exports = router;