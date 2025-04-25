const shareBtn = document.querySelector(".share-btn");
const socialIcons = document.querySelector(".social-icons-window");
const shareImg = document.querySelector(".share-img");
const headers = document.querySelector(".desc");
const headers2 = document.querySelector(".desc2");
const avatar = document.querySelector(".avatar-icon");

shareBtn.addEventListener("click", () => {
  if (socialIcons.classList.contains("social-icons-window")) {
    socialIcons.className = "social-icons-window-visible";
    shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareImg.style.filter = "brightness(0) invert(1)";
    headers.className = "none";
    headers2.className = "none";
    avatar.className = "none";
  } else {
    socialIcons.className = "social-icons-window";
    shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareImg.style.filter =
      "brightness(0.5) sepia(1) saturate(0.5) hue-rotate(180deg)";
    headers.className = "show";
    headers2.classNAme = "show";
    avatar.className = "show";
  }
});
