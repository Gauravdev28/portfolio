// Ensure page starts at top on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.onload = function() {
    window.scrollTo(0, 0);
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Your Subject?"]').value;
        const message = contactForm.querySelector('textarea').value;

        // open mailto
        const mailtoLink = ;
        window.location.href = mailtoLink;

        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Opening Mail...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Opening your email client to send the message to gauravagldeveloper28@gmail.com');
            contactForm.reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });
}
