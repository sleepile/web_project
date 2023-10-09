let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mycat.jpg") {
    myImage.setAttribute("src", "images/mydog.jpg");
  } else {
    myImage.setAttribute("src", "images/mydog.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  let myName = prompt("请输入你的名字：");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "上大学好累，" + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "上大学好累，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};

