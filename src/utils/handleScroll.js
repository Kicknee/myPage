import { handlePresentationScroll } from "./handlePresentationScroll";

export const handleScroll = () => {
  document
    .querySelector("#container")
    .addEventListener("scroll", handlePresentationScroll);
  window.addEventListener("resize", handlePresentationScroll);

  document
    .querySelector("#presentation-link")
    .addEventListener("click", (e) => {
      document.querySelector("#container").scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
};
