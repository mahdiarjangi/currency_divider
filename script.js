// place divided number inside input when window object loaded
window.onload = () => {
  let number = parseInt(document.getElementById("inp").value);
  document.getElementById("inp").value = addCurrencyMask(number);
};

// divide the number with coma
function addCurrencyMask(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// remove coma from number
function removeCurrencyMask(value) {
  return value.toString().replace(",", "");
}

// increasing
function increase(value) {
  let number = removeCurrencyMask(value);
  return addCurrencyMask(parseInt(number) + 10000);
}

// decreasing
function decrease(value) {
  let number = parseInt(removeCurrencyMask(value));

  if (number >= 0 && number > 10000)
    return addCurrencyMask(number - 10000);
  else return 0;
}

// increase input value when plus button clicked
document.getElementById("increment").addEventListener("click", () => {
  let number = document.getElementById("inp").value;

  document.getElementById("inp").value = increase(number);
});

// decrease input value when minus button clicked
document.getElementById("decrement").addEventListener("click", () => {
  let number = document.getElementById("inp").value;

  document.getElementById("inp").value = decrease(number);
});

document.getElementById("inp").addEventListener("change", () => {
  const number = removeCurrencyMask(document.getElementById("inp").value);
  document.getElementById("inp").value = addCurrencyMask(number);
});
