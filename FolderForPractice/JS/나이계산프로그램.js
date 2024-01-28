const btn = document.querySelector("#btn");

btn.addEventListener("click" , () => {
  
  let currYear = document.querySelector("#curr-year");
  let birthYear = document.querySelector("#birth-year");

  let age;
  
  age = Number(currYear.value) - Number(birthYear.value) + 1;

  const result = document.querySelector("#result");
  
  result.innerText = `나이 : ${age}`;

  console.log(age);

});
