const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/database');

// Import routes
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const fileRoutes = require('./routes/fileRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const announcementRoutes = require('./routes/announcementRoutes');

app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/meetings', meetingRoutes);
app.use('/api/announcements', announcementRoutes);

// Database connection
(async () => {
  try {
    await db.authenticate();
    console.log('Database connected.');
    await db.sync();
  } catch (err) {
    console.error('Database connection failed:', err);
  }
})();

module.exports = app;