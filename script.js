document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const loginBtn = document.querySelector('button');
    const closeBtn = document.querySelector('.close-button');

    loginBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting in the traditional way

        // Dummy check for username and password (Replace this with your actual validation logic)
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (username === "user" && password === "pass") {
            window.location.href = 'dashboard.html'; // Redirect to the dashboard page
        } else {
            alert('Invalid username or password!');
        }
    });
});
