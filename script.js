/* js for portfolio */

//content visibility
window.onload = function () {
    const headers = document.querySelectorAll('.dropdown-head');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling; // Get the <p> element right below the header

            // Toggle visibility of content
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
};

/** dark mode */
document.getElementById('darkMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});