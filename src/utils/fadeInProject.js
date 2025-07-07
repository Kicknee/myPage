export const fadeInProject = () => {
  //animate projects tiles

  const projectTiles = document.querySelectorAll(".project");

  const projectTileObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      if (!entry.isIntersecting) {
        entry.target.classList.remove("active");
      }
    });
  });

  projectTiles.forEach((projectTile) => {
    projectTileObserver.observe(projectTile);
  });
};
