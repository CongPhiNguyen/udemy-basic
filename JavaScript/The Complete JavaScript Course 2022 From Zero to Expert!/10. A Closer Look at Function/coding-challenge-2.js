(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  header.style.cursor = "pointer";
  document.querySelector("body").addEventListener("click", () => {
    header.style.color = "blue";
    setTimeout(() => {
      header.style.color = "red";
    }, 500);
  });
})();
