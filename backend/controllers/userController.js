const { User } = require('../models');

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


// const { User } = require('../models/user'); // Make sure this path is correct to your models

// const userController = {
//   // Get user by ID
//   async getUserById(req, res) {
//     try {
//       const { id } = req.params;
      
//       if (!id) {
//         return res.status(400).json({ error: 'User ID is required' });
//       }

//       const user = await User.findByPk(id);
      
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       res.status(200).json(user);
//     } catch (error) {
//       console.error('Error fetching user:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   },

//   // Create a new user
//   async createUser(req, res) {
//     try {
//       const { name, email, password } = req.body;
      
//       if (!name || !email || !password) {
//         return res.status(400).json({ error: 'Name, email, and password are required' });
//       }

//       const newUser = await User.create({ name, email, password });
//       res.status(201).json(newUser);
//     } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   },

//   // Update user
//   async updateUser(req, res) {
//     try {
//       const { id } = req.params;
//       const { name, email, password } = req.body;
      
//       if (!id) {
//         return res.status(400).json({ error: 'User ID is required' });
//       }

//       const user = await User.findByPk(id);
      
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       const updatedUser = await user.update({ name, email, password });
//       res.status(200).json(updatedUser);
//     } catch (error) {
//       console.error('Error updating user:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   },

//   // Delete user
//   async deleteUser(req, res) {
//     try {
//       const { id } = req.params;
      
//       if (!id) {
//         return res.status(400).json({ error: 'User ID is required' });
//       }

//       const user = await User.findByPk(id);
      
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       await user.destroy();
//       res.status(204).end();
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   }
// };

// module.exports = userController;