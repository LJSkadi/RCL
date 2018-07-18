var express = require('express');
const List = require('../models/list')
const Component = require('../models/component')
const passport = require('passport');
const config = require('../configs/index');
var router = express.Router();


//#region DISPLAY HOST LIST
//GET /
router.get('/', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  List.findOne({ _owner: req.user._id, kind : "HOST" })
    .populate('_components')
    .populate({ path: '_components', populate: { path: '_owner'}})
    //.populate({ path: '_components', populate: { path: '_collaborators'}})
    .then(hostList => {
      console.log("This is the hosted list:" + hostList._id)
      res.json(hostList);
    })
    .catch(err => next(err))
});
//#endregion



module.exports = router;
