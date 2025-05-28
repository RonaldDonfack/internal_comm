const { Meeting } = require('../models/meeting');

exports.getAllMeetings = async (req, res) => {
  const meetings = await Meeting.findAll();
  res.json(meetings);
};

exports.getMeetingById = async (req, res) => {
  const meeting = await Meeting.findByPk(req.params.id);
  meeting ? res.json(meeting) : res.status(404).json({ error: 'Meeting not found' });
};

exports.createMeeting = async (req, res) => {
  const meeting = await Meeting.create(req.body);
  res.status(201).json(meeting);
};

exports.updateMeeting = async (req, res) => {
  const [updated] = await Meeting.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'Meeting updated' }) : res.status(404).json({ error: 'Meeting not found' });
};

exports.deleteMeeting = async (req, res) => {
  const deleted = await Meeting.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'Meeting deleted' }) : res.status(404).json({ error: 'Meeting not found' });
};