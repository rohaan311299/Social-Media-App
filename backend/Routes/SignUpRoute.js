const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../Schemas/UserSchema');

router.post('/signup', async (req, res) => {
    try {
        const {email, password} = req.body;

        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message: 'User already exists'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({email, password: hashedPassword});
        await user.save();
        res.status(200).json({ message: 'Signup successful' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;