document.getElementById('themeToggle').addEventListener('click', function(){
    document.body.classList.toggle('dark');
});
// Form  validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMessage');

    if  (form) {
        form.addEventListener('submit', function (e){
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                msg.textContent = "Thank you for reaching out!";
                msg.style.color = "green";
                form.reset();
            } else {
                msg.textContent = "Please fill in all fields.";
                msg.style.color = "red";
            }
        });
    }
});