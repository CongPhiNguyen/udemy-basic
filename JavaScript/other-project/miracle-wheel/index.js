const wheelDOM = document.querySelector("#wheel");
const options = [
  "Mất lượt",
  "100 điểm",
  "200 điểm",
  "Quà tặng",
  "May mắn",
  "Nhân đôi",
  "Mất lượt",
  "100 điểm",
  "200 điểm",
  "Quà tặng",
  "May mắn",
  "Nhân đôi",
  "Mất lượt",
  "100 điểm",
  "200 điểm",
  "Quà tặng",
  "May mắn",
  "Nhân đôi",
];
const createWheel = (part) => {
  for (let i = 0; i < part; i++) {
    // Add text

    // Add line
    const lineDOM = document.createElement("div");
    lineDOM.classList.add("line");
    lineDOM.style.transform = `rotate(${Math.round((360 * i) / part)}deg)`;
    const textDOM = document.createElement("span");
    textDOM.textContent = options[i];
    textDOM.classList.add("text");
    lineDOM.appendChild(textDOM);
    wheelDOM.appendChild(lineDOM);

    // textDOM.style.top = "50%";
    // textDOM.style.right = "0%";
    // textDOM.style.transform = `rotate(${Math.round((360 * i) / part)}deg)`;
  }
};

createWheel(18);
