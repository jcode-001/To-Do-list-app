"use strict";
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const inputValue = document.getElementById("input-box");

const liTags = document.getElementsByTagName("li");
// creates list item only when the input feild is not empty
const validate = () => {
  if (inputValue.value != 0) {
    createListElement();
  } else {
    alertMessage("Input field is empty.");
  }
};

const addListAfterKeyPress = (event) => {
  if (inputValue.value != "" && event.keyCode === 13) {
    createListElement();
  }
};
inputValue.addEventListener("keypress", addListAfterKeyPress);

const createListElement = () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(inputValue.value));
  li.className = "list-item";
  const ulElem = document.getElementById("ul-list");
  ulElem.appendChild(li);
  inputValue.value = "";
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].addEventListener("click", function () {
      liTags[i].classList.toggle("done");
    });
  }
};

for (let i = 0; i < liTags.length; i++) {
  liTags[i].addEventListener("click", function () {
    liTags[i].classList.toggle("done");
  });
}

// cleat list button function
const clearList = () => {
  const liTag = document.getElementsByTagName("li");
  let i = 0;
  for (i; i < liTag.length; i++) {
    liTag[i].style.display = "none";
  }
};

// creat a modal box
const alertMessage = (messsage) => {
  const body = document.querySelector("body");
  const modalWrapper = document.createElement("div");
  modalWrapper.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const closeIcon = document.createElement("span");
  //   closeIcon.appendChild(document.create);
  closeIcon.className = "close";

  const pElem = document.createElement("p");
  pElem.appendChild(document.createTextNode(messsage));

  modalContent.appendChild(closeIcon);
  modalContent.appendChild(pElem);
  modalWrapper.appendChild(modalContent);

  const scriptElem = document.querySelector("script");
  body.insertBefore(modalWrapper, scriptElem);

  window.onclick = function (event) {
    if (event.target == modalWrapper) {
      modalWrapper.style.display = "none";
    }
  };
};
