// Create layer
const createLayerDOM = document.querySelector("#layer-create");
const layerListDOM = document.querySelector("#layer-list");

const createNewLayer = () => {
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
  layerListDOM.removeChild(createLayerDOM);
  layerListDOM.appendChild(newLayer);
  layerListDOM.appendChild(createLayerDOM);
};

createLayerDOM.onclick = createNewLayer;
// layerListDOM.children

// class Layer {

// }
