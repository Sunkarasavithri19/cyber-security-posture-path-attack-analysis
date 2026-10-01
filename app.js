const CONFIG = {
  // Replace this with your deployed Streamlit/dashboard URL when ready.
  // Example: "https://your-project.streamlit.app"
 
};

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const launchButton = document.getElementById("launchButton");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  if (launchButton && CONFIG.launchUrl) {
    launchButton.href = CONFIG.launchUrl;
    if (CONFIG.launchUrl.startsWith("http")) {
      launchButton.target = "_blank";
      launchButton.rel = "noopener noreferrer";
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
