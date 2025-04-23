const shareBtn = document.querySelector(".share-btn");
const socialIcons = document.querySelector(".social-icons-window");

shareBtn.addEventListener("click", () => {
  socialIcons.className = ".social-icons-window-visible";
});
