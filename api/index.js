const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'askldjkfjncio345dfgdfgdasas4344645';

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://matytsoraro:Sc804io20JKyyZP7@cluster0.8bz9uhh.mongodb.net/');

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
        return res.status(400).json('wrong credentials');
    }
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // Logged in
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { httpOnly: true }).json({ id: userDoc._id, username });
        });
    } else {
        res.status(400).json('wrong credentials');
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json('unauthorized');
    }
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
            // Invalid or expired token
            res.clearCookie('token').status(401).json('unauthorized');
        } else {
            // Valid token
            res.json(info);
        }
    });
});

app.post('/logout', (req, res) => {
    res.clearCookie('token').json('ok');
});

app.listen(4000);
