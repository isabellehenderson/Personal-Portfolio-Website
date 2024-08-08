window.addEventListener('DOMContentLoaded', function() {
    // Set the scroll restoration mode to 'auto' to prevent the browser from
    // restoring the scroll position when the page is refreshed
    history.scrollRestoration = 'auto';
  
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
  
      if (targetId === '#') {
        // If the link is the top anchor, scroll to the top immediately
        window.scrollTo(0, 0);
      } else {
        // Otherwise, use smooth scrolling
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });