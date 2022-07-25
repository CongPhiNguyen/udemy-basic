// Create layer
const createLayerDOM = document.querySelector("#layer-create");
const layerListDOM = document.querySelector("#layer-list");
const graphicLayerListDOM = document.querySelector("#graphic-layer-list");

const MAX_LAYER_ALLOW = 10;
let currentLayerIndex = 0;

class LayerToolList {}

class LayerToolItem {}

const rightClickLayerTool = (layerNumber) => {
  const listLayerChild = makeChildrenList(layerListDOM);
  let layerSelect;
  listLayerChild.forEach((value) => {
    // console.log(value.classList);
    if (value.classList.contains(`layer-${layerNumber}`)) {
      layerSelect = value;
    }
  });
  const layerElement = makeChildrenList(layerSelect);
  // console.log(layerElement);
  const thisLayerController = layerElement[layerElement.length - 1];

  if (thisLayerController.classList.contains("hidden"))
    thisLayerController.classList.remove("hidden");
  else {
    thisLayerController.classList.add("hidden");
  }
};
const checkRightClickLayerTool = (rightClickClasslist) => {
  let layerNumber = -1;
  if (rightClickClasslist.includes("layer")) {
    rightClickClasslist.forEach((className) => {
      if (className.indexOf("layer-") === 0) {
        layerNumber = Number(className.substring(6));
      }
    });
  }
  return layerNumber;
};
// Disable right click
window.oncontextmenu = function (e) {
  e.preventDefault();
  // Open the right click layer tool
  const rightClickClasslist = e.target.parentNode.classList.value.split(" ");
  let layerNumber = checkRightClickLayerTool(rightClickClasslist);
  if (layerNumber >= 0) rightClickLayerTool(layerNumber);
};

// Close menu

const makeChildrenList = (htmlDOM) => {
  let listChild = [];
  for (let i = 0; i < htmlDOM.children.length; i++) {
    listChild.push(htmlDOM.children[i]);
  }
  return listChild;
};

// Change layer
const changeLayerTool = (layerIndex) => {
  // Reset index
  currentLayerIndex = layerIndex;
  // console.log("layerIndex", layerIndex);
  const layerListDOMChild = makeChildrenList(layerListDOM);
  // console.log(layerListDOMChild);

  layerListDOMChild.forEach((val, index) => {
    if (val.classList.contains("current")) {
      val.classList.remove("current");
    }
  });
  layerListDOMChild[layerIndex].classList.add("current");
};
// TODO: changeLayerGraphic
const changeLayer = () => {
  changeLayerTool();
};
// Create layer
const createGridDOM = (width, height, gridSize) => {
  let gridDOMList = [];
  const gridDOMSize = (width * height) / (gridSize * gridSize);
  for (let i = 0; i < gridDOMSize; i++) {
    const newGraphicGridView = document.createElement("div");
    newGraphicGridView.classList.add("grid-view");
    newGraphicGridView.style.width = `${gridSize}px`;
    newGraphicGridView.style.height = `${gridSize}px`;
    gridDOMList.push(newGraphicGridView);
  }
  return gridDOMList;
};

const createNewGraphicLayer = () => {
  const graphicLayerLength = graphicLayerListDOM.children.length;

  const newGraphicLayer = document.createElement("li");
  newGraphicLayer.classList.add("graphic-layer");
  newGraphicLayer.style.zIndex = graphicLayerListDOM.children.length;

  const newGraphicLayerView = document.createElement("div");
  newGraphicLayerView.classList.add("layer-view");
  const gridList = createGridDOM(800, 500, 20);
  gridList.forEach((gridView) => {
    // gridView.onclick = () => {
    //   console.log(graphicLayerLength);
    // };
    newGraphicLayerView.appendChild(gridView);
  });

  newGraphicLayer.appendChild(newGraphicLayerView);

  graphicLayerListDOM.appendChild(newGraphicLayer);
};

const createNewToolLayer = () => {
  const layerLength = layerListDOM.children.length - 1;

  const newLayer = document.createElement("li");
  newLayer.classList.add("layer");
  newLayer.classList.add(`layer-${layerLength}`);

  const newLayerView = document.createElement("div");
  newLayerView.classList.add("layer-view");

  const newLayerTitle = document.createElement("p");
  newLayerTitle.classList.add("layer-title");

  // Controller
  const newLayerControllerList = document.createElement("ul");
  newLayerControllerList.classList.add("layer-controller-list");
  newLayerControllerList.classList.add("hidden");

  const newLayerController = document.createElement("li");
  newLayerController.classList.add("layer-controller-item");

  newLayerController.textContent = "Delete";

  newLayerControllerList.appendChild(newLayerController);

  newLayerTitle.textContent = `Layer ${layerLength}`;
  newLayer.appendChild(newLayerView);
  newLayer.appendChild(newLayerTitle);
  newLayer.appendChild(newLayerControllerList);
  newLayer.onclick = (e) => {
    console.log(e.target);
    if (e.target.textContent === "Delete") {
      deleteLayer(layerLength);
    } else {
      console.log(layerLength);
      changeLayerTool(layerLength);
    }
  };

  layerListDOM.removeChild(createLayerDOM);
  layerListDOM.appendChild(newLayer);
  layerListDOM.appendChild(createLayerDOM);

  changeLayerTool(layerLength);
};

// TODO: limit max layers
const createNewLayer = () => {
  createNewToolLayer();
  createNewGraphicLayer();
};

const deleteLayer = (layerIndex) => {
  console.log(layerIndex);
  const listLayerTool = makeChildrenList(layerListDOM);
  // console.log(listLayerTool, makeChildrenList(layerListDOM));
  console.log(listLayerTool);
  // Get element to delete
  let layerToDelete;
  listLayerTool.forEach((value) => {
    // console.log(value.classList);
    if (value.classList.contains(`layer-${layerIndex}`)) {
      layerToDelete = value;
    }
  });
  layerListDOM.removeChild(layerToDelete);
};

createLayerDOM.onclick = () => createNewLayer();
