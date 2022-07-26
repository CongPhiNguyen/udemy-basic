const wheelDOM = document.querySelector("#wheel");

const createWheel = (part) => {
  for (let i = 0; i < part; i++) {
    const lineDOM = document.createElement("div");
    lineDOM.classList.add("line");
    lineDOM.style.transform = `rotate(${Math.round((360 * i) / part)}deg)`;
    wheelDOM.appendChild(lineDOM);
  }
};

createWheel(20);
