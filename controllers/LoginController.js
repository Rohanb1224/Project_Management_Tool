// LoginController.js
const Register = require('../models/RegisterModel');
const bcrypt = require('bcryptjs');

// Login function
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the user with the provided email exists
    const user = await Register.findOne({ email });

    if (!user) {
      console.log("not found");
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const emailprint = user.email;
    // Password is correct, login successful
    res.status(200).json({ emailprint,message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
