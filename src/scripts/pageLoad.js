document.addEventListener("astro:page-load", () => {

    // Update active state in navigation
    updateActiveNavLink();
  
    // Scroll to top of page
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

});

function updateActiveNavLink() {
  // Update the active state of navigation links based on current URL
  const currentPath = window.location.pathname;
  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === currentPath);
  });
}
