const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const PUSER = require('../models/philanthropicSchema');
const NGO = require('../models/ngoSchema');
const MESSAGE = require('../models/messageSchema');
const bcrypt = require('bcryptjs');
// const authenticate = require('../middleware/authentication');

// to get the all ngos through this api
router.get('/allngosdata', async (req, res) => {
    try {
        const allngos = await NGO.find();
        res.status(201).json(allngos);
    } catch (error) {
        res.send(400).json(allngos);
        console.log(error);
    }
});

// Register the Philanthropic

router.post('/philanthropic/register', async (req, res) => {

    const { name, email, password, cpassword } = req.body;
    console.log({ name, email, password, cpassword });

    if (!name || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill the all data" })
        console.log('Not data available');
    };

    try {
        const prePUSER = await PUSER.findOne({ email: email });
        console.log(prePUSER);
        if (prePUSER) {
            res.status(422).json({ error: "This PUSER is already present " });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and cpassword not match" });
        } else {
            const finalPUSER = new PUSER({

                name, email, password, cpassword
            });

            // Already hash the password in Schema before saving into database

            const storedata = await finalPUSER.save();
            console.log(storedata + " It is register ");

            res.status(201).json(storedata);
        }
    } catch (error) {
        // for error handling 
        console.log("Error occurs in the register philanthropic" + error.message);
    }
})

// Register the NGO 

router.post('/ngo/register', async (req, res) => {

    const { name, email, password, cpassword } = req.body;
    console.log({ name, email, password, cpassword });

    if (!name || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill the all data" })
        console.log('Not data available');
    };

    try {
        const prengo = await NGO.findOne({ email: email });
        console.log(prengo);
        if (prengo) {
            res.status(422).json({ error: "This PUSER is already present " });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and cpassword not match" });
        } else {
            const finalNgo = new NGO({
                name, email, password, cpassword
            });

            // Already hash the password in Schema before saving into database

            const storedata = await finalNgo.save();

            res.status(201).json(storedata);
        }
    } catch (error) {
        // for error handling 
        console.log("Error occurs in the register philanthropic " + error);
    }
})


// Login The Philanthropic api 

router.post('/philanthropic/login', async (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password });

    if (!email || !password) {
        res.status(400).json({ error: 'Fill the all details' });
    };

    try {
        const PUSERlogin = await PUSER.findOne({ email: email });
        console.log("data of philantropic " + PUSERlogin);

        if (PUSERlogin) {
            const isMatch = await bcrypt.compare(password, PUSERlogin.password);
            console.log("PUSER Match " + isMatch);

            if (!isMatch) {
                res.status(400).json({ error: "invalid detalis" });
            } else {
                // Token generate and cookies 
                const token = await PUSERlogin.generateAuthToken();
                // console.log(token);

                // Generate the cookie 
                res.cookie('Hackathon', token, {
                    maxAge: 2000000000000000,
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    domain: 'localhost'
                });
                res.status(200).json(PUSERlogin)
            }
        } else {
            res.status(400).json({ error: 'invalid details' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
});


// Login The NGO api 

router.post('/ngo/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: 'Fill the all details' });
    };

    try {
        const ngologin = await NGO.findOne({ email: email });
        console.log("data of ngo" + ngologin);

        if (ngologin) {
            const isMatch = await bcrypt.compare(password, ngologin.password);
            console.log("PUSER Match " + isMatch);

            if (!isMatch) {
                res.status(400).json({ error: "invalid detalis" });
            } else {
                // Token generate and cookies 
                const token = await ngologin.generateAuthToken();
                // console.log(token);

                // Generate the cookie 
                res.cookie('Hackathon', token, {
                    maxAge: 2000000000000000,
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    domain: 'localhost'
                });
                res.status(200).json(ngologin);
            }
        } else {
            res.status(400).json({ error: 'invalid details' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
});


// API For getting the details of ngo 

router.post('/ngoworkdetails/:id', async (req, res) => {

    // getting the plans of ngo 
    const ngoData = req.body;

    if (!ngoData.location || !ngoData.previouswork || !ngoData.endgoal || !ngoData.plans || !ngoData.typeofngo || !ngoData.imageUrl) {
        res.status(422).json({ error: "fill the all data" });
        console.log('Not data available');
    }


    try {
        let { id } = req.params;
        console.log(id);
        console.log(ngoData);

        id = new mongoose.Types.ObjectId(id);
        console.log(id);

        // adding in the perticular ngo schema this details
        const ngoUser = await NGO.findOne({ _id: id });
        console.log("USER FOUND " + ngoUser);

        if (ngoUser) {
            const addData = await ngoUser.addngoinfo(ngoData);
            await ngoUser.save();
            console.log("Data of ngo current work and location " + addData);
            res.status(201).json(addData);

        } else {
            res.status(422).json({ error: "Invalid user" });
        }


    } catch (error) {
        console.log("Error occured in the ngoworkdetails/:id " + error);
    }
});


// to fetch the perticular NGo page

router.get('/getsinglengoinfo/:id',async(req,res)=>{
    try{
        let {id} = req.params;

        id = new mongoose.Types.ObjectId(id);
        console.log(id);

        const individualdata = await NGO.findOne({_id: id});
        res.status(201).json(individualdata);
    } catch (error) {
        res.status(404).json(individualdata);
        console.log("Error occur individual fetching time " + error.message);
    }
})


// Store the text message 

router.post('/insertmessage',async(req,res)=>{
    const newMessage = new MESSAGE(req.body);

    try {
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(404).json(error.message);
    }
})


// Fetching the all messages 

router.get('/getallmessages',async(req,res)=>{
     try {
        const messages = await MESSAGE.find();
        res.status(201).json(messages);
     } catch (error) {
        res.status(404).json(error.message);
     }
})










module.exports = router;