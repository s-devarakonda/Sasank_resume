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


function typeMessage(element, message, delay = 50) {
    let i = 0;
    function type() {
        if (i < message.length) {
            element.textContent += message.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Start typing the message when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    const typedMessageElement = document.getElementById('typed-message');
    const message = "Hi, I am Sasank, Java FullStack Developer";
    typeMessage(typedMessageElement, message);
});

// Function to check if an element is partially in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const partialVisibilityThreshold = 0.2; // Adjust this threshold (0.0 - 1.0) for desired partial visibility
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) * (1 - partialVisibilityThreshold) &&
        rect.bottom > (window.innerHeight || document.documentElement.clientHeight) * partialVisibilityThreshold &&
        rect.left >= 0 &&
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
