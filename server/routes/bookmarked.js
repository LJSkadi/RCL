var express = require('express');
const List = require('../models/list')
const Component = require('../models/component')
const passport = require('passport');
const config = require('../configs/index');
var router = express.Router();


//#region DISPLAY BOOKMARK LIST
//GET /
router.get('/', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  List.findOne({ _owner: req.user._id, kind: "BOOKMARK" })
    .populate('_components')
    .populate({ path: '_components', populate: { path: '_owner' } })
    //.populate({ path: '_components', populate: { path: '_collaborators'}})
    .then(bookmarks => {
      res.json(bookmarks);
    })
    .catch(err => next(err))
});
//#endregion

//#region ADD A NEW BOOKMARK
//POST /
router.post('/comp/:_id/', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let _owner = req.user._id
  let compId = req.params._id;
  List.findOneAndUpdate({ _owner: req.user._id, kind: "BOOKMARK" }, { $push: { _components: compId } }, { new: true })
    .then(updatedBookmarks => {
      console.log("Bookmarks are updated --->", updatedBookmarks);
      res.json(updatedBookmarks);
    })
    .catch(err => next(err));
});
//#endregion

//#region REMOVE A BOOKMARK
//DELETE /
  router.delete('/comp/:_id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    let compId = req.params._id;
    List.findOne({ _owner: req.user._id, kind : "BOOKMARK" })
    .populate('_components')
    .then(bookmarkList => {
      let componentIndex = bookmarkList["_components"].findIndex( component => component._id === compId);
      bookmarkList["_components"].splice(componentIndex, 1); 
    })
    .catch(err => next(err))
  });
//#endregion

module.exports = router;
