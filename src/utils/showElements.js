export const showElements = () => {
  const elements = document.querySelectorAll("nav, section:not(#projects)");
  let str = "";

  elements.forEach((element, indx) => {
    console.log(element.id);
    str += `
    #${element.id}{
        animation-delay: ${indx + 0.5}s
    }
    `;
  });

  return str;
};
