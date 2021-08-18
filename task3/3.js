function checkAnagram(word) {
    let word1 = nana;

    return word == word1.split("").shuffle().join("") ? true : false;
}

alert(checkAnagram("anna"));




function checkAnagram(arr) {
  if (!arr || arr.length <= 1) return false;
  // Нет массива, или её длина 0 или 1, сразу на выход.
  
  let first_word = arr[0].split("").sort().join("");
  
  for (let i = 1; i < arr.length; i++) {
    // от i = 1, не 0
    if (arr[i].split("").sort().join("") != first_word) {
      // Если вдруг [i]-тый элемент оказался не равным, можно не продолжать цикл
      return false;
      // Прямо отсюда выйти из функции, вернув false.      
    }
  }
  
  return true;
  // Цикл добежал и не прервался, значит все слова оказались равны
}

alert(checkAnagram(["anna", "nana"])); // true
