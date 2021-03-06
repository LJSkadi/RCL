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
  router.put('/comp/:_id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    let compId = req.params._id;
    List.findOne({ _owner: req.user._id, kind : "BOOKMARK" })
    .populate('_components')
    .then(bookmarkList => {
      let componentIndex = -1;
      let compCount = 0;
      while (componentIndex === -1 && compCount < bookmarkList._components.length) {
      console.log("This is bookmarkList._components[compCount]._id", bookmarkList._components[compCount]._id);
      console.log("This is compId", req.params._id);
      componentIndex = (bookmarkList._components[compCount]._id == compId) ? compCount : -1;
      compCount++;
      };
      console.log("This is componentIndex", componentIndex);
      bookmarkList["_components"].splice(componentIndex, 1); 
      List.findOneAndUpdate({ _owner: req.user._id, kind : "BOOKMARK" }, {_components: bookmarkList._components}, { new: true })
      .then(newBMList => {
        res.json(newBMList)
      })
      .catch(err => next(err))
    })
    .catch(err => next(err))
  });
//#endregion

module.exports = router;
