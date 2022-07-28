// Create layer
const createLayerDOM = document.querySelector("#layer-create");
const layerListDOM = document.querySelector("#layer-list");
const graphicLayerListDOM = document.querySelector("#graphic-layer-list");

const MAX_LAYER_ALLOW = 10;
let currentLayerIndex = 0;

class LayerToolList {
  layerToolListItem;
  layerListDOM;
  continueIndex;
  currentLayerIndex;
  constructor() {
    this.layerListDOM = document.querySelector("#layer-list");
    this.layerToolListItem = [];
    this.continueIndex = 0;
  }
  getCurrentLayer = () => {
    console.log(this.layerToolListItem);
    let currentLayer;
    this.layerToolListItem.forEach((val, index) => {
      console.log(val.layerToolItemDOM);
      console.log(`layer-${this.currentLayerIndex}`);
      if (
        val.layerToolItemDOM.classList.contains(
          `layer-${this.currentLayerIndex}`
        )
      ) {
        currentLayer = val;
      }
    });
    return currentLayer;
  };
  createNewLayer = () => {
    let layerToolItem = new LayerToolItem(this.continueIndex);
    // console.log(layerToolItem);
    this.layerListDOM.removeChild(createLayerDOM);
    this.layerListDOM.appendChild(layerToolItem.layerToolItemDOM);
    this.layerListDOM.appendChild(createLayerDOM);
    this.layerToolListItem.push(layerToolItem);
    this.changeLayerTool(this.continueIndex);
    this.continueIndex++;
  };
  deleteLayer = (layerDOM) => {
    console.log(layerDOM);
    this.layerListDOM.removeChild(layerDOM);
    this.layerToolListItem.forEach((val) => {
      if (layerDOM.classList == val.layerToolItemDOM.classList) {
        val.deleteGraphicLayer();
      }
    });
    this.layerToolListItem = this.layerToolListItem.filter((val) => {
      return layerDOM.classList != val.layerToolItemDOM.classList;
    });
  };
  changeLayerTool = (classIndex) => {
    this.currentLayerIndex = classIndex;
    const layerListDOMChild = makeChildrenList(this.layerListDOM);
    layerListDOMChild.forEach((val, index) => {
      if (val.classList.contains("current")) {
        val.classList.remove("current");
      }
      if (val.classList.contains(`layer-${classIndex}`)) {
        val.classList.add("current");
      }
    });
  };
}

class LayerToolItem {
  classIndex;
  graphicLayer;
  static layerToolItemDOM;
  constructor(classIndex) {
    this.classIndex = classIndex;
    this.createLayerToolItem();
    this.graphicLayer = new LayerGraphicItem(classIndex);
  }
  createLayerToolItem = () => {
    const newLayer = document.createElement("li");
    newLayer.classList.add("layer");
    newLayer.classList.add(`layer-${this.classIndex}`);

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

    newLayerTitle.textContent = `Layer ${this.classIndex}`;
    newLayer.appendChild(newLayerView);
    newLayer.appendChild(newLayerTitle);
    newLayer.appendChild(newLayerControllerList);
    newLayer.onclick = (e) => {
      // console.log(e.target);
      if (e.target.textContent === "Delete") {
        layerToolList.deleteLayer(newLayer);
      } else {
        // console.log(this.classIndex);
        layerToolList.changeLayerTool(this.classIndex);
      }
    };
    this.layerToolItemDOM = newLayer;
    return this.layerToolItemDOM;
  };
  deleteGraphicLayer = () => {
    console.log("classIndex", this.classIndex);
    this.graphicLayer.delete();
  };
}

class LayerGraphicItem {
  graphicLayerDOM;
  listShapeDOM;
  constructor(layerIndex) {
    this.createNewLayer(layerIndex);
  }
  createNewLayer = (graphicLayerLength) => {
    const newGraphicLayer = document.createElement("li");
    newGraphicLayer.classList.add("graphic-layer");
    newGraphicLayer.style.zIndex = graphicLayerLength;

    const newGraphicLayerView = document.createElement("div");
    newGraphicLayerView.classList.add("layer-view");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // console.log(randomColor);
    newGraphicLayerView.style.backgroundColor = `#${randomColor}`;

    // const gridList = createGridDOM(800, 500, 20);
    // gridList.forEach((gridView) => {
    //   newGraphicLayerView.appendChild(gridView);
    // });
    newGraphicLayer.appendChild(newGraphicLayerView);
    graphicLayerListDOM.appendChild(newGraphicLayer);
    this.graphicLayerDOM = newGraphicLayer;
    return newGraphicLayer;
  };
  delete = () => {
    graphicLayerListDOM.removeChild(this.graphicLayerDOM);
    console.log("Delete current layer");
  };
  // drawShape = () => {
  //   //Delete all child
  //   listShapeDOM();
  // };
  addShape = (dataIcon) => {
    let currentShapeDOM = document.createElement("span");
    currentShapeDOM.classList.add("iconify");
    currentShapeDOM.setAttribute("data-icon", dataIcon);
    currentShapeDOM.style.position = "absolute";
    let randomX = Math.round(Math.random() * 600);
    let randomY = Math.round(Math.random() * 400);
    let dataHeight = 100;
    currentShapeDOM.style.left = `${randomX}px`;
    currentShapeDOM.style.top = `${randomY}px`;
    currentShapeDOM.setAttribute(`data-height`, `${dataHeight}px`);
    console.log(this.graphicLayerDOM);
    const layerView = makeChildrenList(this.graphicLayerDOM)[0];
    layerView.appendChild(currentShapeDOM);
  };
}

class Shape {}
// Main object
const layerToolList = new LayerToolList();

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

// TODO: changeLayerGraphic
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

const createNewToolLayer = () => {
  layerToolList.createNewLayer();
};

// TODO: limit max layers

createLayerDOM.onclick = () => {
  layerToolList.createNewLayer();
};

// DRAW

// click draw item
const drawToolItems = document.querySelectorAll(".draw-tool-item");
drawToolItems.forEach((val) => {
  val.onclick = (e) => {
    console.log(e.target.getAttribute("data-icon"));
    let currentLayer = layerToolList.getCurrentLayer();
    // console.log(currentLayer.graphicLayer.graphicLayerDOM);
    // currentLayer.graphicLayer
    // let layerView = makeChildrenList(currentLayer.graphicLayer.graphicLayerDOM)[0];
    // console.log(layerView[0]);
    currentLayer.graphicLayer.addShape(e.target.getAttribute("data-icon"));
  };
});
