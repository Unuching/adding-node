// const para = document.createElement("p");
// const node = document.createTextNode("lorem20");
// para.appendChild(node);
// const newElement = document.getElementById("div2");
// newElement.appendChild(para);

const newPara = document.createElement("h1");
const newNode = document.createTextNode("Hello, This is a new para");

newPara.appendChild(newNode);
const newElement = document.getElementById("div2");
newElement.appendChild(newPara);
