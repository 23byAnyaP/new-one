function squareDigits(num){
    return +(num.toString().split("").map(el => +el * el).join(""));
  }

  alert ( squareDigits("1999") );