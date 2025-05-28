const { File } = require('../models/file');

exports.getAllFiles = async (req, res) => {
  const files = await File.findAll();
  res.json(files);
};

exports.getFileById = async (req, res) => {
  const file = await File.findByPk(req.params.id);
  file ? res.json(file) : res.status(404).json({ error: 'File not found' });
};

exports.createFile = async (req, res) => {
  const file = await File.create(req.body);
  res.status(201).json(file);
};

exports.updateFile = async (req, res) => {
  const [updated] = await File.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'File updated' }) : res.status(404).json({ error: 'File not found' });
};

exports.deleteFile = async (req, res) => {
  const deleted = await File.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'File deleted' }) : res.status(404).json({ error: 'File not found' });
};
