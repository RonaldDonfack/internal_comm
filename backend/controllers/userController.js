const { User } = require('../models/user');

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: 'User not found' });
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

exports.updateUser = async (req, res) => {
  const [updated] = await User.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'User updated' }) : res.status(404).json({ error: 'User not found' });
};

exports.deleteUser = async (req, res) => {
  const deleted = await User.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'User deleted' }) : res.status(404).json({ error: 'User not found' });
};
