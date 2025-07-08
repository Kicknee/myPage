export const handlePresentationScroll = () => {
  const windowWidth = window.innerWidth;
  const windowOffSet = Math.floor(window.innerHeight * 0.1 + 55);

  const presentation = document.getElementById("presentation");
  const presentationLink = document.getElementById("presentation-link");

  const skillsOffSetTop = document.getElementById("skills").offsetTop;
  const scrollOffSetTop = document.getElementById("container").scrollTop;

  if (windowWidth > 1000) {
    if (scrollOffSetTop < skillsOffSetTop + windowOffSet) {
      presentation.style.position = "sticky";
      presentation.style.top = "100px";
    } else {
      presentation.style.position = "relative";
      presentation.style.top = `${skillsOffSetTop - windowOffSet}px`;
    }
  } else {
    presentation.style.position = `relative`;
    presentation.style.top = `0px`;
  }

  if (scrollOffSetTop + windowOffSet + 100 < skillsOffSetTop) {
    presentationLink.classList.add("active");
  } else {
    presentationLink.classList.remove("active");
  }
};
