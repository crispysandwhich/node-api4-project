const express = require('express');
const Users = require('./users-model');
const Posts = require('../posts/posts-model');
const middleWare = require('../middleware/middleware')

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get('/', middleWare.logger, (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  Users.get()
    .then((user) => {
      res.status(200).json(user)
    })
    .catch(err => {
      next(err)
    })
});

router.get('/:id', middleWare.logger, middleWare.validateUserId ,(req, res, next) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  Users.getById(req.params.id)
  .then(userId => {
    res.status(200).json(userId)
  })
  .catch(err =>{
    next(err)
  })
});

router.post('/', middleWare.validateUser, middleWare.logger ,(req, res, next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid

  const name = req.body;

  Users.insert(name)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      next(err);
    });
  

});

router.put('/:id', middleWare.validateUserId, middleWare.validateUser, middleWare.logger,  (req, res, next) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid

  Users.update(req.params.id, req.body)
    .then(user => {
      if(!user){
        res.status(404).json({message: `${user} doesnt exist...`})
      }else{
        res.status(200).json(user);
      }
    })
    .catch((err) => {
      next(err)
    })

});

router.delete('/:id',middleWare.validateUserId, middleWare.logger,  (req, res, next) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id


  Users.remove(req.params.id)
    .then((user) => {
      res.status(200).json({message: `${user} has been deleted`})
    })
    .catch(err => {
      next(err)
    })

});

router.get('/:id/posts', middleWare.validateUserId, middleWare.logger, (req, res, next) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id

  Posts.getById(req.params.id)
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => next(err))

});

router.post('/:id/posts', middleWare.validateUserId, middleWare.logger, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid

  Posts.update(req.params.id,middleWare.validateUser, req.params.body)
    .then(uPost => {
      res.status(200).json(uPost)
    })
    .catch(err => next(err))


});

// do not forget to export the router

module.exports = router