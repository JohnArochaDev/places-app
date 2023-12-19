/////////////////////////////////////
//   Import dependencies ////////////
/////////////////////////////////////
const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');



///////////////////////////////
//   Create router ////////////
///////////////////////////////
const router = express.Router()



/////////////////////////////////////
//   Routes + controllers ///////////
/////////////////////////////////////
// Get Sign Up
router.get('/signup', (req, res) => {
    const { username, loggedIn, userId } = req.session

    res.render('users/signup', {usernamne, loggedIn, userId })
})
//Get Login
router.get('/login', (req, res) => {
    const { username, loggedIn, userId } = req.session

    res.render('users/login', {usernamne, loggedIn, userId })
})
//Get Logout
router.get('/logout', (req, res) => {
    const { username, loggedIn, userId } = req.session

    res.render('users/logout', {usernamne, loggedIn, userId })
})






//////////////////////////////
//   Export Router ///////////
//////////////////////////////
module.exports = router