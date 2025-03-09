const sections = document.querySelectorAll("section:not(.presentation)");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const currentSection = document.querySelector(
        `#${entry.target.className}-link`
      );
      if (entry.isIntersecting) {
        currentSection.classList.add("active");
        console.log(entry.target.id);
      }
      if (!entry.isIntersecting) {
        currentSection.classList.remove("active");
      }
    });
  },
  {
    root: document.querySelector(".container"),
    threshold: 0.3,
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
