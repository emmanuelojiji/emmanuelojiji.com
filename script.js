window.onload = () => {
  const menu = document.querySelector(".menu");
  const windowsButton = document.querySelector(".windows-icon-wrap");
  const windowsIcon = document.querySelector(".windows-icon");

  windowsButton.onclick = () => {
    if (menu.style.display == "block") {
      windowsButton.style.backgroundColor = "transparent";

      setTimeout(() => {
        menu.style.display = "none";
      }, 50);

      menu.style.transform = "translateY(100%)";
    } else {
      menu.style.display = "block";

      setTimeout(() => {
        menu.style.transform = "translateY(0%)";
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

  const browser = document.querySelector(".browser");
  const iframe = document.querySelector(".iframe");
  const folder = document.querySelectorAll(".folder-text-wrap");
  const chrome = document.querySelector('.chrome');
  const closeButton = document.querySelector('.close');

  const showBrowser = (e) => {
    browser.style.display = "block";
    iframe.src = e.currentTarget.getAttribute("data-website-link");
    chrome.style.display = 'block';

    setTimeout(() => {
      chrome.style.opacity = '1'

    });
  };

  for (let i = 0; i < folder.length; i++) {
    folder[i].onclick = (e) => {
      showBrowser(e);
    };
  }

  closeButton.onclick = () => {
    browser.style.display = 'none';
    chrome.style.opacity = '0';

    setTimeout(() => {
      chrome.style.display = 'none'
    },300);
  }
};
