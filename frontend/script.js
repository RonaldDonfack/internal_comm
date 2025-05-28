document.addEventListener('DOMContentLoaded', () => {
  loadUnreadMessages();
  loadAnnouncements();
  loadUserSettings();

  const uploadForm = document.getElementById('upload-form');
  if (uploadForm) {
    uploadForm.addEventListener('submit', handleFileUpload);
  }

  const settingsForm = document.getElementById('settings-form');
  if (settingsForm) {
    settingsForm.addEventListener('submit', updateUserSettings);
  }
});

// Chargement des messages non lus
async function loadUnreadMessages() {
  try {
    const response = await fetch('http://localhost:3000/api/messages/unread', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    });

    if (!response.ok) throw new Error('Erreur lors du chargement des messages');
    const messages = await response.json();

    const messagesContainer = document.getElementById('unread-messages');
    messagesContainer.innerHTML = '';

    messages.forEach(msg => {
      const messageEl = document.createElement('div');
      messageEl.className = 'message-item';
      messageEl.innerHTML = `<strong>${msg.sender}</strong>: ${msg.content}`;
      messagesContainer.appendChild(messageEl);
    });
  } catch (error) {
    console.error('Erreur fetch messages:', error);
  }
}

// Chargement des annonces
async function loadAnnouncements() {
  try {
    const response = await fetch('http://localhost:3000/api/announcements', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    });

    if (!response.ok) throw new Error('Erreur lors du chargement des annonces');
    const announcements = await response.json();

    const container = document.getElementById('announcements');
    container.innerHTML = '';

    announcements.forEach(a => {
      const annEl = document.createElement('div');
      annEl.className = 'announcement';
      annEl.innerHTML = `<h4>${a.title}</h4><p>${a.body}</p>`;
      container.appendChild(annEl);
    });
  } catch (error) {
    console.error('Erreur fetch annonces:', error);
  }
}

// Upload de fichier
async function handleFileUpload(e) {
  e.preventDefault();

  const fileInput = document.getElementById('file-input');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  try {
    const response = await fetch('http://localhost:3000/api/files/upload', {
      method: 'POST',
      mode: 'cors',
      body: formData
    });

    if (!response.ok) throw new Error('Échec du téléversement');

    alert('Fichier envoyé avec succès !');
    fileInput.value = '';
  } catch (error) {
    console.error('Erreur upload fichier:', error);
    alert('Erreur lors du téléversement');
  }
}

// Chargement des paramètres utilisateur
async function loadUserSettings() {
  try {
    const response = await fetch('http://localhost:3000/api/user/settings', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    });

    if (!response.ok) throw new Error('Impossible de charger les paramètres');
    const settings = await response.json();

    document.getElementById('username').value = settings.username || '';
    document.getElementById('email').value = settings.email || '';
  } catch (error) {
    console.error('Erreur chargement paramètres:', error);
  }
}

// Mise à jour des paramètres utilisateur
async function updateUserSettings(e) {
  e.preventDefault();

  const updatedSettings = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value
  };

  try {
    const response = await fetch('http://localhost:3000/api/user/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(updatedSettings)
    });

    if (!response.ok) throw new Error('Échec de la mise à jour');
    alert('Paramètres mis à jour avec succès');
  } catch (error) {
    console.error('Erreur mise à jour paramètres:', error);
    alert('Erreur lors de la mise à jour');
  }
}
