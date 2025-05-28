// User data storage (simulated database)
        const users = [
            { id: 1, name: "Joyce", email: "joyce@gmail.com", password: "password123" }
        ];

        // Current user
        let currentUser = null;

        // Switch between login and register tabs
        function switchTab(tab) {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
           
            document.querySelector(`.auth-tab[onclick="switchTab('${tab}')"]`).classList.add('active');
            document.getElementById(`${tab}-form`).classList.add('active');
        }

        // Toggle password visibility
        function togglePassword(id) {
            const input = document.getElementById(id);
            input.type = input.type === 'password' ? 'text' : 'password';
        }

        // Show forgot password (placeholder)
        function showForgotPassword() {
            alert("Password reset functionality would be implemented here.\nTypically, we would send a reset link to your email.");
        }

        // Validate email format
        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        // Validate password (min 6 chars)
        function isValidPassword(password) {
            return password.length >= 6;
        }

        // Show error message
        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }

        // Hide error message
        function hideError(elementId) {
            document.getElementById(elementId).style.display = 'none';
        }

        // Login function
        function login() {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
           
            // Reset errors
            hideError('login-email-error');
            hideError('login-password-error');
           
            // Validate inputs
            let isValid = true;
           
            if (!email) {
                showError('login-email-error', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('login-email-error', 'Please enter a valid email');
                isValid = false;
            }
           
            if (!password) {
                showError('login-password-error', 'Password is required');
                isValid = false;
            } else if (!isValidPassword(password)) {
                showError('login-password-error', 'Password must be at least 6 characters');
                isValid = false;
            }
           
            if (!isValid) return;
           
            // Check user credentials
            const user = users.find(u => u.email === email && u.password === password);
           
            if (user) {
                currentUser = user;
                alert(`Welcome back, ${user.name}! Login successful.`);
                // In a real app, you would redirect to the dashboard here
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        }

        // Register function
        function register() {
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
           
            // Reset errors
            hideError('register-name-error');
            hideError('register-email-error');
            hideError('register-password-error');
            hideError('register-confirm-error');
           
            // Validate inputs
            let isValid = true;
           
            if (!name) {
                showError('register-name-error', 'Name is required');
                isValid = false;
            }
           
            if (!email) {
                showError('register-email-error', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('register-email-error', 'Please enter a valid email');
                isValid = false;
            } else if (users.some(u => u.email === email)) {
                showError('register-email-error', 'Email already registered');
                isValid = false;
            }
           
            if (!password) {
                showError('register-password-error', 'Password is required');
                isValid = false;
            } else if (!isValidPassword(password)) {
                showError('register-password-error', 'Password must be at least 6 characters');
                isValid = false;
            }
           
            if (password !== confirmPassword) {
                showError('register-confirm-error', 'Passwords do not match');
                isValid = false;
            }
           
            if (!isValid) return;
           
            // Create new user
            const newUser = {
                id: users.length + 1,
                name,
                email,
                password
            };
           
            users.push(newUser);
            currentUser = newUser;
           
            alert(`Registration successful, ${name}! You can now login.`);
            switchTab('login');
           
            // Clear registration form
            document.getElementById('register-name').value = '';
            document.getElementById('register-email').value = '';
            document.getElementById('register-password').value = '';
            document.getElementById('register-confirm-password').value = '';
        }