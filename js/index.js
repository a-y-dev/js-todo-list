const todoLiTags = document.querySelectorAll("ul#list > li");

function newElement(inputTag) {
  if (inputTag.value.trim() == "") {
    const errorToast = document.querySelector("#errorToast");

    errorToast.classList.remove("hide");
    errorToast.classList.add("show");

    document
      .querySelector("#errorToast button.close")
      .addEventListener("click", () => {
        errorToast.classList.remove("show");
        errorToast.classList.add("hide");
      });

    setTimeout(() => {
      errorToast.classList.remove("show");
      errorToast.classList.add("hide");
    }, 3000);
  } else {
    const liDOM = document.createElement("li");
    liDOM.textContent = inputTag.value;
    inputTag.value = "";
    document.querySelector("ul#list").appendChild(liDOM);
    toggleClass(liDOM, "checked");
    let spanDOM = document.createElement("span");
    spanDOM.textContent = "X";
    spanDOM.classList.add("close");
    liDOM.appendChild(spanDOM);
    toastAction();
    spanDOM.addEventListener("click", toastAction);
  }
}

const toggleClass = (tag, className) => {
  tag.addEventListener("click", () => {
    tag.classList.toggle(className);
  });
};

todoLiTags.forEach((liTag) => {
  toggleClass(liTag, "checked");
  let spanDOM = document.createElement("span");
  spanDOM.textContent = "X";
  spanDOM.classList.add("close");
  liTag.appendChild(spanDOM);
});

function toastAction(event) {
  const successToast = document.querySelector("#successToast");
  const toastMessage = document.querySelector("#successToast .toast-body");

  if (event) {
    event.target.parentElement.remove();
    toastMessage.textContent = "Silindi";
  } else {
    toastMessage.textContent = "Listeye eklendi.";
  }

  successToast.classList.remove("hide");
  successToast.classList.add("show");

  document
    .querySelector("#successToast button.close")
    .addEventListener("click", () => {
      successToast.classList.remove("show");
      successToast.classList.add("hide");
    });

  setTimeout(() => {
    successToast.classList.remove("show");
    successToast.classList.add("hide");
  }, 3000);
}

const spanCloseTags = document.querySelectorAll("span.close");

spanCloseTags.forEach((item) => {
  item.addEventListener("click", toastAction);
});
