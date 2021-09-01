window.onload = () => {
  const start = document.querySelector(".start");
  const windowsButton = document.querySelector(".windows-icon-wrap");
  const windowsIcon = document.querySelector(".windows-icon");

  windowsButton.onclick = () => {
    if (start.style.display == "flex") {
      windowsButton.style.backgroundColor = "transparent";

      setTimeout(() => {
        start.style.display = "none";
      }, 100);

      start.style.transform = "translateY(100%)";
    } else {
      start.style.display = "flex";

      setTimeout(() => {
        start.style.transform = "translateY(0%)";
      }, 50);

      windowsButton.style.backgroundColor = "#474747";
    }
  };

  windowsButton.onmouseover = () => {
    windowsIcon.src = "/images/windows-logo-blue.svg";

    windowsButton.onmouseout = () => {
      windowsIcon.src = "/images/windows-logo.svg";
    };
  };



};
