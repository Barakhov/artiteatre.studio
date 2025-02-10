document.addEventListener("astro:page-load", () => {
    // Reinitialize any client-side components or libraries
    initializeComponents();

    // Update active state in navigation
    updateActiveNavLink();
  
    // Scroll to top of page
    window.scrollTo(0, 0);
  
    // Analytics page view tracking
    trackPageView();
  
    // Re-run any syntax highlighting
    highlightCode();
  
    console.log("Page loaded and ready");

});

function initializeComponents() {
  // Initialize or re-initialize any client-side components
  // For example, if you're using libraries like Alpine.js or custom components
}

function updateActiveNavLink() {
  // Update the active state of navigation links based on current URL
  const currentPath = window.location.pathname;
  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === currentPath);
  });
}

function trackPageView() {
  // If you're using an analytics service, track the page view here
  // For example, with Google Analytics:
  // if (typeof gtag === 'function') {
  //   gtag('config', 'YOUR-TRACKING-ID', {'page_path': window.location.pathname});
  // }
}

function highlightCode() {
  // If you're using a syntax highlighting library like Prism.js
  // if (typeof Prism !== 'undefined') {
  //   Prism.highlightAll();
  // }
}
