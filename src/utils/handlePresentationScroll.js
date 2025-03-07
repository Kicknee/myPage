export const handlePresentationScroll = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth > 1000) {
    const container = document.querySelector(".container");
    const presentation = document.querySelector(".presentation");
    const skills = document.querySelector(".skills");
    const windowOffSet = Math.floor(window.innerHeight * 0.1 + 55);
    const presentationOffSetTop = presentation.offsetTop;
    const skillsOffSetTop = skills.offsetTop;
    const scrollOffSetTop = container.scrollTop;

    if (
      skillsOffSetTop >
      presentationOffSetTop + scrollOffSetTop - windowOffSet
    ) {
      presentation.style.transform = `translateY(${scrollOffSetTop}px)`;
    }
  } else {
    document.querySelector(".presentation").style.transform = `translateY(0px)`;
  }
};
