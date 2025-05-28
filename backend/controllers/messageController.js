const { Message } = require('../models/message');

exports.getAllMessages = async (req, res) => {
  const messages = await Message.findAll();
  res.json(messages);
};

exports.getMessageById = async (req, res) => {
  const message = await Message.findByPk(req.params.id);
  message ? res.json(message) : res.status(404).json({ error: 'Message not found' });
};

exports.createMessage = async (req, res) => {
  const message = await Message.create(req.body);
  res.status(201).json(message);
};

exports.updateMessage = async (req, res) => {
  const [updated] = await Message.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'Message updated' }) : res.status(404).json({ error: 'Message not found' });
};

exports.deleteMessage = async (req, res) => {
  const deleted = await Message.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'Message deleted' }) : res.status(404).json({ error: 'Message not found' });
};
