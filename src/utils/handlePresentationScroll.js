export const handlePresentationScroll = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth > 1000) {
    const container = document.querySelector(".container");
    const presentation = document.querySelector(".presentation");
    const skills = document.querySelector(".skills");
    const windowOffSet = Math.floor(window.innerHeight * 0.1 + 55);
    const presentationHeight = presentation.offsetTop;
    const skillsHeight = skills.offsetTop;
    const scrollPosition = container.scrollTop;

    if (skillsHeight > presentationHeight + scrollPosition - windowOffSet) {
      presentation.style.transform = `translateY(${scrollPosition}px)`;
    }
  } else {
    document.querySelector(".presentation").style.transform = `translateY(0px)`;
  }
};
