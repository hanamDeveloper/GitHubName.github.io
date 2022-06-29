let selected;

const selectElements = document.querySelectorAll(".select-month");

const handleClickMonth = (select) => {
  selectElements.forEach((item) => {
    if (select === item) {
      return item.classList.add("selected");
    } else {
      return item.classList.remove("selected");
    }
  });
};

selectElements.forEach((item, index) => {
  item.addEventListener("click", () => handleClickMonth(item, index));
});
