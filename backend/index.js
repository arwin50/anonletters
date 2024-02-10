import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import Letter from "./models/letter.js";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import { getCurrentDate } from "../src/utils/CurrentDate.js";
dotenv.config()

main().then(() => console.log('Connected to the Database'))
    .catch(err => console.log('OHNO ERROR!', err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
    console.log(process.env.DB_URL)
}

const app = express()
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions))

app.post('/', async (req, res) => {
    const { name, message } = req.body;

    const letter = await Letter.findOne({ name })
    if (letter) {

        try {
            letter.message.push({ text: message, date: getCurrentDate() })
            // Save the letter to the database
            const savedLetter = await letter.save();
            res.status(201).json(savedLetter);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    else {
        try {
            const newLetter = new Letter({
                name, message: { text: message, date: getCurrentDate() }
            });
            // Save the letter to the database
            const savedLetter = await newLetter.save();
            res.status(201).json(savedLetter);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

});


app.get('/username', async (req, res) => {
    const { name } = req.query
    try {
        const user = await Letter.findOne({ name })

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Send the user information in the response
        res.status(200).json(user);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get('/letters', async (req, res) => {
    const { id } = req.query
    try {
        const user = await Letter.findOne({ _id: id })

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Send the user information in the response
        res.status(200).json(user);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})

app.listen(5000, () => {
    console.log('listening in 5000000000')
})
