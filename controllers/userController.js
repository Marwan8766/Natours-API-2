const User = require('../models/userModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);

// Donot update the password here use /signup
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route will not be defined use /signup instead',
  });
};
