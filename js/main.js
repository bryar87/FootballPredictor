// Mobile Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            toggleMobileMenu();
        });
    }
    
    // Close menu when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', function() {
            closeMobileMenu();
        });
    }
    
    // Close menu when clicking a link
    if (mobileNavLinks) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
    }
    
    // Helper functions for menu
    function toggleMobileMenu() {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Prevent scrolling when menu is open
        if (document.body.classList.contains('menu-open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    function closeMobileMenu() {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }
    
    // Form Validation
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const predictionForm = document.getElementById('prediction-form');
    
    // Login Form Validation
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phone = document.getElementById('phone');
            const password = document.getElementById('password');
            const phoneMessage = document.getElementById('phone-message');
            const passwordMessage = document.getElementById('password-message');
            const formMessage = document.getElementById('form-message');
            
            // Reset messages
            resetFormMessages();
            
            let isValid = true;
            
            // Validate phone
            if (!phone.value.match(/07[0-9]{2} [0-9]{3} [0-9]{4}/)) {
                showError(phone, phoneMessage, 'Please enter a valid phone number (07xx xxx xxxx)');
                isValid = false;
            } else {
                showSuccess(phone, phoneMessage, 'Looks good!');
            }
            
            // Validate password
            if (password.value.length < 8) {
                showError(password, passwordMessage, 'Password must be at least 8 characters');
                isValid = false;
            } else {
                showSuccess(password, passwordMessage, 'Looks good!');
            }
            
            // If form is valid, show success message (in a real app, this would submit to a server)
            if (isValid) {
                formMessage.textContent = 'Login successful!';
                formMessage.classList.add('success');
                
                // Simulate redirect after successful login
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 2000);
            }
        });
    }
    
    // Register Form Validation
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const phone = document.getElementById('phone');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm-password');
            
            const nameMessage = document.getElementById('name-message');
            const phoneMessage = document.getElementById('phone-message');
            const passwordMessage = document.getElementById('password-message');
            const confirmPasswordMessage = document.getElementById('confirm-password-message');
            const formMessage = document.getElementById('form-message');
            
            // Reset messages
            resetFormMessages();
            
            let isValid = true;
            
            // Validate name
            if (name.value.trim() === '') {
                showError(name, nameMessage, 'Please enter your name');
                isValid = false;
            } else if (name.value.trim().length < 3) {
                showError(name, nameMessage, 'Name must be at least 3 characters');
                isValid = false;
            } else {
                showSuccess(name, nameMessage, 'Looks good!');
            }
            
            // Validate phone
            if (!phone.value.match(/07[0-9]{2} [0-9]{3} [0-9]{4}/)) {
                showError(phone, phoneMessage, 'Please enter a valid phone number (07xx xxx xxxx)');
                isValid = false;
            } else {
                showSuccess(phone, phoneMessage, 'Looks good!');
            }
            
            // Validate password
            if (password.value.length < 8) {
                showError(password, passwordMessage, 'Password must be at least 8 characters');
                isValid = false;
            } else if (!password.value.match(/[A-Za-z]/) || !password.value.match(/[0-9]/)) {
                showError(password, passwordMessage, 'Password must include both letters and numbers');
                isValid = false;
            } else {
                showSuccess(password, passwordMessage, 'Looks good!');
            }
            
            // Validate confirm password
            if (confirmPassword.value !== password.value) {
                showError(confirmPassword, confirmPasswordMessage, 'Passwords do not match');
                isValid = false;
            } else {
                showSuccess(confirmPassword, confirmPasswordMessage, 'Passwords match!');
            }
            
            // If form is valid, show success message (in a real app, this would submit to a server)
            if (isValid) {
                formMessage.textContent = 'Registration successful!';
                formMessage.classList.add('success');
                
                // Simulate redirect after successful registration
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 2000);
            }
        });
    }
    
    // Popup functionality
    const confirmationPopup = document.getElementById('confirmationPopup');
    const closePopupBtn = document.getElementById('closePopup');
    
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', function() {
            confirmationPopup.classList.remove('active');
        });
    }
    
    // Prediction Form Validation
    if (predictionForm) {
        predictionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = document.querySelectorAll('.prediction-input');
            const predictionMessage = document.getElementById('prediction-message');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.value === '' || isNaN(parseInt(input.value))) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                    input.classList.add('success');
                }
            });
            
            if (!isValid) {
                predictionMessage.textContent = 'Please enter valid scores for both teams';
                predictionMessage.classList.add('error');
                return;
            }
            
            // If form is valid, show success message
            predictionMessage.textContent = 'Prediction submitted successfully!';
            predictionMessage.classList.remove('error');
            predictionMessage.classList.add('success');
            
            // Show the popup confirmation
            if (confirmationPopup) {
                confirmationPopup.classList.add('active');
                
                // Add animation classes to make it more visually appealing
                const popup = confirmationPopup.querySelector('.popup');
                if (popup) {
                    popup.classList.add('fade-in');
                }
            }
            
            // Reset form after popup is closed
            closePopupBtn.addEventListener('click', function resetFormAfterPopup() {
                predictionForm.reset();
                predictionMessage.textContent = '';
                predictionMessage.classList.remove('success');
                inputs.forEach(input => {
                    input.classList.remove('success');
                });
                
                // Remove this event listener to avoid multiple bindings
                closePopupBtn.removeEventListener('click', resetFormAfterPopup);
            }, { once: true });
        });
    }
    
    // Helper functions
    function showError(input, messageElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        messageElement.textContent = message;
        messageElement.classList.add('error');
        messageElement.classList.remove('success');
    }
    
    function showSuccess(input, messageElement, message) {
        input.classList.remove('error');
        input.classList.add('success');
        messageElement.textContent = message;
        messageElement.classList.remove('error');
        messageElement.classList.add('success');
    }
    
    function resetFormMessages() {
        const messages = document.querySelectorAll('.form-message');
        messages.forEach(message => {
            message.textContent = '';
            message.classList.remove('error', 'success');
        });
    }
});