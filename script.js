document.addEventListener('DOMContentLoaded', function() {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");
    
    // Add an event listener for scroll
    window.addEventListener("scroll", navHighlighter);
    
    function navHighlighter() {
        // Get current scroll position
        let scrollY = window.pageYOffset;
        
        // Loop through sections to get height, top and ID values for each
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Adjust offset as needed
            const sectionId = current.getAttribute("id");
            
            // If our current scroll position enters the space where current section is
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    }
    
    // Optional: Scroll to section when navigation link is clicked
    document.querySelectorAll('.navigation a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust offset as needed
                    behavior: 'smooth'
                });
            }
        });
    });
});