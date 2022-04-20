const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator'); //https://express-validator.github.io/docs/


//create a user using :POST "/api/auth/". Doesn't require Auth
router.post('/', [
   body('name','Enter a valid name').isLength({ min: 3 }),
   body('email','Enter a valid email').isEmail(),
   body('password','Password must be atleast 5 character').isLength({ min: 5 }),
], (req, res) => {
   const errors = validationResult(req); //https://express-validator.github.io/docs/
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // here it will return the error message
   }
   
   //https://express-validator.github.io/docs/
   User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then(user => res.json(user))
   //  .catch(err=>{console.log(err)})
   // res.json({error:'please enter the valid details',message:err.message})

})


module.exports = router;