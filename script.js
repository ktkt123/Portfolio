function determinants() {
  let a11 = document.querySelector("#a11");
  let b11 = a11.value;
  let a12 = document.querySelector("#a12");
  let b12 = a12.value;
  let a13 = document.querySelector("#a13");
  let b13 = a13.value;
  let a21 = document.querySelector("#a21");
  let b21 = a21.value;
  let a22 = document.querySelector("#a22");
  let b22 = a22.value;
  let a23 = document.querySelector("#a23");
  let b23 = a23.value;
  let a31 = document.querySelector("#a31");
  let b31 = a31.value;
  let a32 = document.querySelector("#a32");
  let b32 = a32.value;
  let a33 = document.querySelector("#a33");
  let b33 = a33.value;

  let output1= document.querySelector("#output1");
   output1.innerHTML = b11*b22*b33+b12*b23*b31+b13*b21*b32-b13*b22*b31-b12*b21*b33-b11*b23*b32
}


function makeNumber(string){
  let makeNumber11 = document.querySelector("#a11");
  makeNumber11.textContent = string;
  let makeNumber12 = document.querySelector("#a12");
  makeNumber12.textContent = string;
  let makeNumber13 = document.querySelector("#a13");
  makeNumber13.textContent = string;
  let makeNumber21 = document.querySelector("#a21");
  makeNumber21.textContent = string;
  let makeNumber22 = document.querySelector("#a22");
  makeNumber22.textContent = string;
  let makeNumber23 = document.querySelector("#a23");
  makeNumber23.textContent = string;
  let makeNumber31 = document.querySelector("#a31");
  makeNumber31.textContent = string;
  let makeNumber32 = document.querySelector("#a32");
  makeNumber32.textContent = string;
  let makeNumber33 = document.querySelector("#a33");
  makeNumber33.textContent = string;
}


// Button
document.querySelector("#buttonCalculate").addEventListener("click", determinants);