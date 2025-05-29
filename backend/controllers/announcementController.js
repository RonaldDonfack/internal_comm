const { Announcement } = require('../models');

exports.getAllAnnouncements = async (req, res) => {
  const announcements = await Announcement.findAll();
  res.json(announcements);
};

exports.getAnnouncementById = async (req, res) => {
  const announcement = await Announcement.findByPk(req.params.id);
  announcement ? res.json(announcement) : res.status(404).json({ error: 'Announcement not found' });
};

exports.createAnnouncement = async (req, res) => {
  const announcement = await Announcement.create(req.body);
  res.status(201).json(announcement);
};

exports.updateAnnouncement = async (req, res) => {
  const [updated] = await Announcement.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'Announcement updated' }) : res.status(404).json({ error: 'Announcement not found' });
};

exports.deleteAnnouncement = async (req, res) => {
  const deleted = await Announcement.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'Announcement deleted' }) : res.status(404).json({ error: 'Announcement not found' });
};