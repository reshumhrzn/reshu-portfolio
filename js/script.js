// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-right');
const navItems = document.querySelectorAll('.nav-right li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');  // toggle menu
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
});

// Close menu when a nav link is clicked
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// ===== SIMPLIFIED CONTACT FORM HANDLING =====
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous messages
    form.querySelectorAll('.error-message').forEach(el => el.remove());
    const existingSuccess = document.getElementById('form-success');
    if (existingSuccess) existingSuccess.remove();

    let valid = true;

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    // Simple error handling
    if (!name.value.trim()) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.innerText = 'Enter your name';
        name.after(error);
        valid = false;
    }

    if (!email.value.trim()) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.innerText = 'Enter your email';
        email.after(error);
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.innerText = 'Enter a valid email';
        email.after(error);
        valid = false;
    }

    if (!message.value.trim()) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.innerText = 'Enter a message';
        message.after(error);
        valid = false;
    }

    // Show success message
    if (valid) {
        const success = document.createElement('p');
        success.id = 'form-success';
        success.innerText = 'Thank you! Your message has been sent.';
        form.appendChild(success);
        form.reset();
    }
});
