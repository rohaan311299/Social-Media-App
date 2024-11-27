const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const signUpRoute = require("./Routes/SignUpRoute");
const signInRoute = require('./Routes/SignInRoute');

require('dotenv').config();

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDB();
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.use("/api", signUpRoute);
app.use('/api', signInRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});