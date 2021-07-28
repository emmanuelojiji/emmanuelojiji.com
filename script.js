window.onload = () => {
  const menu = document.querySelector(".menu");
  const windowsButton = document.querySelector(".windows-icon-wrap");
  const windowsIcon = document.querySelector(".windows-icon");

  windowsButton.onclick = () => {
    if (menu.style.display == "block") {
      
      windowsButton.style.backgroundColor = "transparent";

      setTimeout(() => {
        menu.style.display = 'none'
      }, 50);
    
        menu.style.transform = 'translateY(100%)';
      
    } else {
     
    menu.style.display = 'block';

      setTimeout(() => {
        menu.style.transform = 'translateY(0%)';
      }, 50);
         
      windowsButton.style.backgroundColor = "#474747";
    }
  };

  windowsButton.onmouseover = () => {
    windowsIcon.src = "/images/windows-logo-blue.svg";
    console.log("hey");

    windowsButton.onmouseout = () => {
      windowsIcon.src = "/images/windows-logo.svg";
    };
  };
};
