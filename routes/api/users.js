const express = require("express");
const router = express.Router();

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.post('./register', (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email})
        .then( user => {
            if(user){
                errors.email = Email already ExtensionScriptApis;
                return res.status(400).json(errors);
            }else{
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
            }
        })
})

router.post

router.get('/test', (req, res) => {
    res.json({ msg: "This is the user route"})
})

module.exports = router;