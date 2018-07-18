var express = require('express');
const List = require('../models/list')
const Component = require('../models/component')
const User = require('../models/user')
const passport = require('passport');
const config = require('../configs/index');
const api = require('api-npm');
var router = express.Router();

//#region ADD A NEW COMPONENT
//POST /
router.post('/add', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let userId = req.user._id
  User.findById(userId)
  .then(user =>{
    const { 
      name, 
      repo, 
      npmLink, 
      docLink, 
      hashtags, 
      tutorial, 
      description, 
      //hierarchicalStructure, 
      //numberOfLevels 
    } = req.body;
    const newComp = new Component({
      ownerrepo: user.github,
      _owner: userId,
      //_collaborators,
      name, 
      repo, 
      npmLink, 
      docLink,
      hashtags, 
      tutorial, 
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
            res.json(createdComp);
          })
          .catch(err => next(err));
      })
      .catch(err => next(err));
  })  
  .catch(err => next(err));
    
  });
  //#endregion
  
  
  //#region DISPLAY ONE COMPONENT
  //GET /:id
  router.get('/:id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    console.log("This is req.params.id", req.params.id);
    let compId = req.params.id;
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
            success: true
          })
          .catch(err => next(err))
        })
        .catch(err => next(err))
  });
  //#endregion

//#region GET API INFO
  //GET /
  router.get('/update/:name', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    const sendNpmInfoDetails = data => {
      console.log("data.name",data.name)
      console.log("data.description",data.description)
      console.log("data.maintainers",data.maintainers)
      console.log("data.keywords",data.keywords)
      console.log("data.repository",data.repository)
      console.log("license", data.license)
      if(data.name!==undefined && data.repository!==undefined){
    let npmInfo = { 
    "name": data.name,
    "description": data.description,
    "maintainers": data.maintainers,
    "hashtags":data.keywords,
    "url":data.repository.url,
    "license":data.license}
    res.json({
      success: true,
      npmInfo})}
      else{
          npmInfo={ "name": undefined}
          res.json({
            success: false,
            npmInfo
          })
      }
    }
    
    let npmName = req.params.name;
    //api.getstat(`${npmName}`, '2000-01-01', `${(new Date().getFullYear())}-${(new Date().getMonth())+1}-${new Date().getDate()}`, sendNpmInfoStats); 
    api.getdetails(`${npmName}`, sendNpmInfoDetails );

  });
  //#endregion

  module.exports = router;