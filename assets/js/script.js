document.addEventListener('DOMContentLoaded', function() {
    // You can add mobile navigation toggle functionality here if needed
    
    // Example: Add active class to current page link
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-section a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath && currentLocation.includes(linkPath) && linkPath !== './index.html') {
            link.style.opacity = '0.6';
        }
    });
});
