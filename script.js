const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convert = num => {
  if (!num) {
    return "Please enter a valid number";
  } else if(num < 1) {
    return "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    return "Please enter a number less than or equal to 3999";
  } else if (parseInt(num) === 69) {
    return "Are ya goonin' daughter?";
  } else if (parseInt(num) === 420){
    return "Wow you're so funny, are'nt ya?";
  }
  else if (parseInt(num) === 9){
    return "IX(All will return to nihility)";
  }
  else if (parseInt(num) === 50){
    return "L(ily)";
  }
  const reference = [
  ["M",1000],
  ["CM",900],
  ["D",500],
  ["CD",400],
  ["C",100],
  ["XC",90],
  ["L",50],
  ["XL",40],
  ["X",10],
  ["IX",9],
  ["V",5],
  ["IV",4],
  ["I",1]
  ]
  const result = [];
  reference.forEach((arr) => {
    while(num >= arr[1]){
      result.push(arr[0]);
      num -= arr[1]
    }
  })
  return result.join("")
}

const displayOutput = () => {
  output.innerText = " "; 
  output.textContent = convert(userInput.value);
}

convertBtn.addEventListener("click",displayOutput)
