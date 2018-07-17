var express = require('express');
const List = require('../models/list')
const Component = require('../models/component')
const passport = require('passport');
const config = require('../configs/index');
const api = require('api-npm');
var router = express.Router();

//#region ADD A NEW COMPONENT
//POST /
router.post('/add', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    let _owner = req.user._id
    const { 
      name, 
      repo, 
      npmLink, 
      docLink, 
      hashtags, 
      tutorial, 
      description, 
      hierarchicalStructure, 
      numberOfLevels } = req.body;
    const newComp = new Component({
      _owner,
      //_collaborators,
      name, 
      repo, 
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
  router.get('/:_id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    console.log("This is req.params._id", req.params._id);
    let compId = req.params._id;
     Component.findById(compId)
        .then(component => {
            console.log("This is component", component)
          res.json({
            success: true,
            component
          });
        })
        .catch(err => next(err))
  });
  //#endregion
  
  //#region EDIT A COMPONENT
  //PUT /
  router.put('/edit/:_id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    let compId = req.params._id
    console.log("This is req.body", req.body)
    const { 
      name, 
      repo, 
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
      repo, 
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
  router.delete('/:_id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
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

//#region GET API INFO
  //GET /
  router.get('/update/:name', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    let npmName = req.params.name;
    Promise.all([
        api.getdetails(`${npmName}`),
        api.getstat(`${npmName}`, '2000-01-01', `${(new Date().getFullYear())}-${(new Date().getMonth())+1}-${new Date().getDate()}`) 
    ])
    .then(array => {
            let npmInfo ={
                downloads : array[1].downloads,
                name: array[0].name,
                description: array[0].description,
                maintainers: array[0].maintainers,
                hashtags: array[0].keywords,
                repo: array[0].repository,
                license: array[0].license
                }
            console.log("Component is deleted");
            res.json({
                success: true,
                npmInfo
            });
          })
        .catch(err => next(err))
  });
  //#endregion

  module.exports = router;