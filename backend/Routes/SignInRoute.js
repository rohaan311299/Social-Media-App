const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../Schemas/UserSchema');

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // If successful, return a success message (or a token if implementing JWT)
        res.status(200).json({ message: 'Sign in successful' });
    } catch (error) {
        console.error('Error during sign in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
