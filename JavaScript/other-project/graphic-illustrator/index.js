// Create layer
const createLayerDOM = document.querySelector("#layer-create");
const layerListDOM = document.querySelector("#layer-list");
const graphicLayerListDOM = document.querySelector("#graphic-layer-list");

const MAX_LAYER_ALLOW = 10;
const currentLayerIndex = 0;

const createChildrenList = (htmlDOM) => {
  let listChild = [];
  for (let i = 0; i < htmlDOM.children.length - 1; i++) {
    listChild.push(htmlDOM.children[i]);
  }
  return listChild;
};

// Change layer
const changeLayerTool = (layerIndex) => {
  // Reset index
  console.log("layerIndex", layerIndex);
  const layerListDOMChild = createChildrenList(layerListDOM);
  console.log(layerListDOMChild);

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
    gridView.onclick = () => {
      console.log(graphicLayerLength);
    };
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

  newLayerTitle.textContent = `Layer ${layerLength}`;
  newLayer.appendChild(newLayerView);
  newLayer.appendChild(newLayerTitle);
  newLayer.onclick = () => {
    changeLayerTool(layerLength);
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

createLayerDOM.onclick = () => createNewLayer();
