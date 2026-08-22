const form = document.querySelector("form"); 
const tipButtons = document.querySelectorAll("[data-tip]");
const customAmount = document.getElementById("customAmount");

const bill = document.getElementById("bill"); 
const people = document.getElementById("people"); 
const tipAmount = document.getElementById("tipAmount"); 
const total = document.getElementById("total"); 

const resetBtn = document.getElementById("resetBtn"); 

const peopleInputError = document.getElementById("peopleInputError");


let billAmount = 0; 
let selectedTip = 0;
let peopleAmount = 0; 



function calculateTip() {

  const tip = billAmount * (selectedTip / 100);
  const totalAmount = (billAmount + tip);
  const tipPerPerson = (tip / peopleAmount); 
  const amountPerPerson = (totalAmount / peopleAmount);

  if(billAmount === 0 || selectedTip === 0 || peopleAmount === 0){
    return; 
  }

  console.log(amountPerPerson); 
  tipAmount.textContent = `${tipPerPerson}`;
  total.textContent = `$${amountPerPerson}`; 
}

bill.addEventListener("input", () => {
  billAmount = +bill.value; 
  calculateTip();
});

tipButtons.forEach(button => {
  button.addEventListener("click", () =>{
    selectedTip = Number(button.dataset.tip); 
    calculateTip(); 
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
})

customAmount.addEventListener("input", (e) => {
  selectedTip = e.target.value;
  calculateTip(); 
});

people.addEventListener("input", (e) => {
  const value = e.target.value; 

  peopleAmount = +value; 

  if(value.trim() === ""){
    peopleInputError.classList.remove("show");
    return; 
  } 

  if(peopleAmount === 0) {
    peopleInputError.classList.add("show"); 
    return; 
  } else {
    peopleInputError.classList.remove("show");
  }

  calculateTip(); 
})


resetBtn.addEventListener("click", () => {
  form.reset();
  tipAmount.textContent = ``;
  total.textContent = ``; 

}); 