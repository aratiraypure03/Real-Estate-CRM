function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-button');
    if (theme === 'dark') {
        themeIcon.classList.add('bi-brightness-high');
        themeIcon.classList.remove('bi-moon');
    } else {
        themeIcon.classList.add('bi-moon');
        themeIcon.classList.remove('bi-brightness-high');
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-mode');
    updateThemeIcon(savedTheme);
});
