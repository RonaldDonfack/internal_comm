  // Navigation between sections
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all nav items
                document.querySelectorAll('.nav-item').forEach(navItem => {
                    navItem.classList.remove('active');
                });
               
                // Add active class to clicked nav item
                this.classList.add('active');
               
                // Hide all sections
                document.querySelectorAll('.content-section').forEach(section => {
                    section.style.display = 'none';
                });
               
                // Show the selected section
                const sectionId = this.getAttribute('data-section') + '-section';
                document.getElementById(sectionId).style.display = 'block';
            });
        });

        // Simulate file upload
        document.querySelector('.upload-area').addEventListener('click', function() {
            alert('File upload dialog would open here in a real implementation');
        });

        // Simulate sending a message
        document.querySelector('.send-btn').addEventListener('click', function() {
            const messageInput = document.querySelector('.chat-input textarea');
            if (messageInput.value.trim() !== '') {
                const messagesContainer = document.querySelector('.chat-messages');
                const newMessage = document.createElement('div');
                newMessage.className = 'message sent';
                newMessage.innerHTML = `
                    ${messageInput.value}
                    <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                `;
                messagesContainer.appendChild(newMessage);
                messageInput.value = '';
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        });

        // Allow pressing Enter to send message
        document.querySelector('.chat-input textarea').addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                document.querySelector('.send-btn').click();
            }
        });

        // Simulate file attachment in chat
        document.querySelector('.file-upload-btn').addEventListener('click', function() {
            const messagesContainer = document.querySelector('.chat-messages');
            const newMessage = document.createElement('div');
            newMessage.className = 'message sent';
            newMessage.innerHTML = `
                <i>📄</i> example_document.pdf
                <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            `;
            messagesContainer.appendChild(newMessage);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });

        // Channel switching
        document.querySelectorAll('.channel-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.channel-item').forEach(channel => {
                    channel.classList.remove('active');
                });
                this.classList.add('active');
                document.querySelector('.chat-header h3').textContent = this.textContent;
               
                // In a real app, this would load the channel's messages
                const messagesContainer = document.querySelector('.chat-messages');
                messagesContainer.innerHTML = `
                    <div class="message received">
                        Welcome to ${this.textContent}!
                        <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                    </div>
                `;
            });
        });

        // Simulate joining a meeting
        document.querySelectorAll('.meeting-actions button:first-child').forEach(btn => {
            btn.addEventListener('click', function() {
                const meetingTitle = this.closest('.meeting-card').querySelector('.meeting-title').textContent;
                alert(`Joining meeting: ${meetingTitle}`);
            });
        });

        // Initialize with home section visible
        document.getElementById('home-section').style.display = 'block';


//   // Navigation between sections
//         document.querySelectorAll('.nav-item').forEach(item => {
//             item.addEventListener('click', function() {
//                 document.querySelectorAll('.nav-item').forEach(navItem => navItem.classList.remove('active'));
//                 this.classList.add('active');
//                 document.querySelectorAll('.content-section').forEach(section => section.style.display = 'none');
//                 const sectionId = this.getAttribute('data-section') + '-section';
//                 document.getElementById(sectionId).style.display = 'block';
//             });
//         });

//         // Fetch and render announcements
//         fetch('/api/announcements')
//             .then(res => res.json())
//             .then(data => {
//                 const container = document.getElementById('announcements-container');
//                 container.innerHTML = '';
//                 data.forEach(item => {
//                     const div = document.createElement('div');
//                     div.className = 'announcement-card';
//                     div.innerText = item.title + ' - ' + item.content;
//                     container.appendChild(div);
//                 });
//             });

//         // Send chat message
//         document.querySelector('.send-btn').addEventListener('click', () => {
//             const textarea = document.querySelector('.chat-input textarea');
//             const message = textarea.value;
//             if (!message.trim()) return;

//             const chatMessages = document.querySelector('.chat-messages');
//             const messageDiv = document.createElement('div');
//             messageDiv.classList.add('message', 'sent');
//             messageDiv.innerHTML = message + '<div class="message-time">Now</div>';
//             chatMessages.appendChild(messageDiv);
//             chatMessages.scrollTop = chatMessages.scrollHeight;

//             fetch('/api/messages', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ channel: 'general', content: message })
//             });

//             textarea.value = '';
//         });

//         // Upload file
//         document.querySelector('.file-upload-btn')?.addEventListener('click', () => {
//             const fileInput = document.createElement('input');
//             fileInput.type = 'file';
//             fileInput.onchange = () => {
//                 const file = fileInput.files[0];
//                 const formData = new FormData();
//                 formData.append('file', file);

//                 fetch('/api/files/upload', {
//                     method: 'POST',
//                     body: formData
//                 })
//                 .then(res => res.json())
//                 .then(data => alert('File uploaded successfully'));
//             };
//             fileInput.click();
//         });

//         // Load meetings
//         fetch('/api/meetings')
//             .then(res => res.json())
//             .then(data => {
//                 const container = document.getElementById('meetings-container');
//                 container.innerHTML = '';
//                 data.forEach(item => {
//                     const div = document.createElement('div');
//                     div.className = 'meeting-card';
//                     div.innerText = item.topic + ' at ' + item.time;
//                     container.appendChild(div);
//                 });
//             });