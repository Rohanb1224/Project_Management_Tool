const Register = require("../models/RegisterModel");
const bcrypt = require('bcryptjs');

module.exports.register = async (req, res) => {
  console.log("b");
  try {
    console.log("inside controller");
    const { name,email, password, retypePassword } = req.body;

    // Check if user with the same email already exists
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Check if password and retype password match
    if (password !== retypePassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new Register({ name,email, password: hashedPassword });
    await newUser.save();
    console.log("helllllllllllllllllllllllllllllllo");

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log("help");
    console.log(error);
    res.status(500).json({ error: 'blahhhh' });
  }

};
