const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const {errorHandler} = require('../utils/error');
const {User} = require('../models/User');

// module.exports.signup = async(req,res,next) => {
//     const { username, password, role } = req.body;
//   const hashedPassword = bcrypt.hashSync(password, 10);
//   const newUser = new User({ username, password: hashedPassword, role });
//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports.signin = async(req, res, next) => {
    const { username, password } = req.body;
  try {
    const validUser = await User.findOne({ username });
    if (!validUser) return next(errorHandler(404, 'User not an admin'));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
    const token = jwt.sign({ id: validUser._id, role: validUser.role }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};


