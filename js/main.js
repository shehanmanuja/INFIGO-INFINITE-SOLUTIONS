document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('bg-white/90', 'py-2');
            navbar.classList.add('bg-white', 'py-0');
        } else {
            navbar.classList.remove('shadow-md', 'bg-white', 'py-0');
            navbar.classList.add('bg-white/90', 'py-2');
        }
    });
});
