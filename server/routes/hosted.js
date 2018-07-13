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

//#region ADD A NEW COMPONENT
//POST /
router.post('/comp/add', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let _owner = req.user._id
  const { 
    name, 
    githubRepro, 
    npmLink, 
    docLink, hashtags, tutorial, description, hierarchicalStructure, numberOfLevels } = req.body;
  const newComp = new Component({
    _owner,
    //_collaborators,
    name, 
    githubRepro, 
    npmLink, 
    docLink,
    hashtags, 
    //tutorial, 
    description, 
    //hierarchicalStructure,
    //numberOfLevels
  });

  newComp.save()
    .then(createdComp => {
      console.log("New Component created successfully ", createdComp);
      List.findOneAndUpdate({ _owner: req.user._id, kind : "HOST" }, { $push: { _components: createdComp._id } }, { new: true })
        .then(updatedHostlist => {
          console.log("HostList is updated --->", updatedHostlist);
          res.json(updatedHostlist);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});
//#endregion


//#region DISPLAY ONE COMPONENT
//GET /:id
router.get('/comp/:_id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  List.findOne({ _owner: req.user._id, kind : "HOST" })
    .populate('_components')
    .then(hostList =>{
      Component.findById(req.params._id)
      .then(component => {
        res.json(component);
      })
      .catch(err => next(err))

    })
    .catch(err => next(err))
});
//#endregion

//#region EDIT A COMPONENT
//PUT /
router.put('/comp/edit/:_id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let compId = req.params._id
  console.log("This is req.body", req.body)
  const { 
    name, 
    githubRepro, 
    npmLink, 
    docLink,
    hashtags,
    tutorial, 
    description, 
    hierarchicalStructure, 
    numberOfLevels 
  } = req.body;
  console.log("This is hashtags", hashtags)
  List.findOne({ _owner: req.user._id, kind: "HOST" })
  .populate('_components')
  .then(hostList =>{
    Component.findByIdAndUpdate( compId, {
    name, 
    githubRepro, 
    npmLink,
    docLink, 
    hashtags, 
    tutorial, 
    description, 
    hierarchicalStructure, 
    numberOfLevels
  } , { new: true })
        .then(updatedComponent => {
          console.log("Component is updated --->", updatedComponent);
          res.json(updatedComponent);
        })
        .catch(err => next(err))
      })
      .catch(err => next(err))
});
//#endregion

//#region DELETE A COMPONENT
//DELETE /
router.delete('/comp/:_id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let compId = req.params._id;
  List.findOne({ _owner: req.user._id, kind : "HOST" })
  .populate('_components')
  .then(hostList => {
    let componentIndex = hostList["_components"].findIndex( component => component._id === compId);
    hostList["_components"].splice(componentIndex, 1); 
    Component.findByIdAndRemove( compId )
        .then( () => {
          console.log("Component is deleted");
          res.json();
        })
        .catch(err => next(err))
      })
      .catch(err => next(err))
});
//#endregion

module.exports = router;
