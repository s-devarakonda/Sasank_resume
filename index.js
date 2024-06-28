// Function to show a specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the target section
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        targetElement.classList.add('active');
    }
}

// Function to check if an element is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scrolling and show sections
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('active');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Initially show the About section
document.getElementById('about').classList.add('active');
