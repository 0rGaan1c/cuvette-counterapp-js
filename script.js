const count = document.getElementById("count");

const getButton = (buttonType) => {
  const btn = document.getElementById(buttonType);
  return btn;
};

const changeCount = (operationType) => {
  if (operationType === "reset") {
    count.innerText = "0";
  }

  if (operationType === "increment") {
    count.innerText = Number(count.innerText) + 1;
  }

  if (operationType === "decrement") {
    count.innerText = Number(count.innerText) - 1;
  }
};

const incrementBtn = getButton("increment");
const resetBtn = getButton("reset");
const decrementBtn = getButton("decrement");

incrementBtn.addEventListener("click", () => {
  changeCount("increment");
});

resetBtn.addEventListener("click", () => {
  changeCount("reset");
});

decrementBtn.addEventListener("click", () => {
  changeCount("decrement");
});
