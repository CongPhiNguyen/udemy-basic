const accItem = document.getElementsByClassName("accordion-item");
const accHD = document.getElementsByClassName("accordion-item-title");

function toggleItem() {
  let itemClassList = this.parentNode.classList;
  // console.log(this.parentNode.classList);
  if (itemClassList.contains("open")) {
    this.parentNode.classList.remove("open");
    this.parentNode.classList.add("close");
  } else if (itemClassList.contains("close")) {
    this.parentNode.classList.remove("close");
    this.parentNode.classList.add("open");
  }
}

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
