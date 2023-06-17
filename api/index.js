const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://matytsoraro:Sc804io20JKyyZP7@cluster0.8bz9uhh.mongodb.net/');

app.post('/register', async (req,res) =>{
    const { username, password } = req.body;
    try{
        const userDoc = await User.create({
            username,
            password

        })
        res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }


});

app.listen(4000);
//mongodb+srv://matytsoraro:Sc804io20JKyyZP7@cluster0.8bz9uhh.mongodb.net/
//Sc804io20JKyyZP7