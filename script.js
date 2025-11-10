// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been sent. (This is a demo - no email was actually sent.)`);
    // Reset form
    this.reset();
});

// Download CV button
document.getElementById('download-cv').addEventListener('click', function() {
    alert('CV download initiated!');
    window.location.href = "https://drive.google.com/drive/folders/17hS7sza6KeFib2lgW7vzKWBhZoXogtGZ?usp=sharing";
});

