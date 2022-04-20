const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator'); //https://express-validator.github.io/docs/


//create a user using :POST "/api/auth/createuser". Doesn't require login
router.post('/createuser', [
   body('name','Enter a valid name').isLength({ min: 3 }),
   body('email','Enter a valid email').isEmail(),
   body('password','Password must be atleast 5 character').isLength({ min: 5 }),
],async (req, res) => {
   //If there are errors ,return Bad request and the errors
   const errors = validationResult(req); //https://express-validator.github.io/docs/
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // here it will return the error message
   }
   
   //https://express-validator.github.io/docs/
   //check whether the user with this email exists already
   try {
      
   //if email will duplicate
   let user = await User.findOne({ email: req.body.email });
   if (user) {
      return res.status(400).json({error:"Sorry a user with this email already exists"})
   }

      //create a new user
   user=await User .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
   })
   //.then(user => res.json(user))
   //  .catch(err=>{console.log(err)})
   // res.json({error:'please enter the valid details',message:err.message})
      res.json(user);
   }
   //catch the error
   catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured");
   }
})


module.exports = router;