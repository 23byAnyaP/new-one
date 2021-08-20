function removeEveryOther(arr) {
    arr = ["Keep", "Remove", "Keep", "Remove", "Keep"];
    return arr.filter((a,i) => i%2 == 0);
    }
    alert ( removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]) )
