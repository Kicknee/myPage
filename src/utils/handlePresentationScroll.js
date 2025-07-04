export const handlePresentationScroll = () => {
  const windowWidth = window.innerWidth;
  const container = document.getElementById("container");
  const presentation = document.getElementById("presentation");
  const skills = document.getElementById("skills");
  const presentationLink = document.getElementById("presentation-link");
  const windowOffSet = Math.floor(window.innerHeight * 0.1 + 55);
  const presentationOffSetTop = presentation.offsetTop;
  const skillsOffSetTop = skills.offsetTop;
  const scrollOffSetTop = container.scrollTop;
  if (windowWidth > 1000) {
    if (
      skillsOffSetTop >
      presentationOffSetTop + scrollOffSetTop - windowOffSet
    ) {
      presentation.style.transform = `translateY(${scrollOffSetTop}px)`;
    }
  } else {
    document.getElementById("presentation").style.transform = `translateY(0px)`;
  }
  if (scrollOffSetTop < windowOffSet * 1.5) {
    presentationLink.classList.add("active");
  } else {
    presentationLink.classList.remove("active");
  }
};
