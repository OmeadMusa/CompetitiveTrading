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
