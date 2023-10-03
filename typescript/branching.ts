// 1
/*
if (condition1) {
    ...
} else if (condition2) {
    ...
} else {
    ...
}
*/
function isOdd(number: number) {
  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

// 2
/*
condition ? true : false
*/
function isOddTernary(number: number) {
  return number % 2 === 0 ? false : true;
}

// 3
/*
switch (variable) {
    case condition1:
        ...
    case condition2:
        ...
    default:
        ...
}
*/
function isOddSwitch(number: number) {
  switch (number % 2 === 0) {
    case true:
      return false;
    default:
      return true;
  }
}

// console.log(isOdd(4));
// console.log(isOddTernary(4));
// console.log(isOddSwitch(4));

// NESTED IF ELSE HELL
function umurToKata(umur: number | string) {
  if (umur == 1) {
    if (umur === 1) {
      return "Beneran umur 1 tahun";
    } else {
      return "Bohong kamu dek";
    }
  } else if (umur == 2) {
    if (umur === 2) {
      return "Beneran umur 2 tahun";
    } else {
      return "Bohong kamu dek";
    }
  } else if (umur == 3) {
    if (umur === 3) {
      return "Beneran umur 3 tahun";
    } else {
      return "Bohong kamu dek";
    }
  } else if (umur == 4) {
    if (umur === 4) {
      return "Beneran umur 4 tahun";
    } else {
      return "Bohong kamu dek";
    }
  } else if (umur == 5) {
    if (umur === 5) {
      return "Beneran umur 5 tahun";
    } else {
      return "Bohong kamu dek";
    }
  } else if (umur == 6) {
    if (umur === 6) {
      return "Beneran umur 6 tahun";
    } else {
      return "Bohong kamu dek";
    }
  } else if (umur == 7) {
    if (umur === 7) {
      return "Beneran umur 7 tahun";
    } else {
      return "Bohong kamu dek";
    }
  } else if (umur == 8) {
    if (umur === 8) {
      return "Beneran umur 8 tahun";
    } else {
      return "Bohong kamu dek";
    }
  } else if (umur == 9) {
    if (umur === 9) {
      return "Beneran umur 9 tahun";
    } else {
      return "Bohong kamu dek";
    }
  } else if (umur == 10) {
    if (umur === 10) {
      return "Beneran umur 10 tahun";
    } else {
      return "Bohong kamu dek";
    }
  }
}

/*
= -> reassignment, artinya bisa merubah nilai
== -> perbandingannya dari nilai saja (1 == "1") true
=== -> selain nilai, tipe data juga dibandingkan (1 === "1") false
*/

// console.log(umurToKata("1"));

function tryIfElse(rank: number) {
  if (rank === 1) {
    console.log("Numba wan");
  } else if (rank === 2) {
    console.log("Not bad for second place");
  } else if (rank === 3) {
    console.log("Welp, okay third place");
  } else {
    console.log("Bersyukur");
  }
}

function trySwitch(rank: number) {
  switch (rank) {
    case 1:
      console.log("Numba wan");
      break;
    case 2:
      console.log("Not bad for second place");
      break;
    case 3:
      console.log("Welp, okay third place");
      break;
    default:
      console.log("Bersyukur");
      break;
  }
}

function tryTernary(rank: number) {
  const result =
    rank === 1
      ? "Numba wan"
      : rank === 2
      ? "Not bad for second place"
      : rank === 3
      ? "Welp, okay third place"
      : "Bersyukur";
  console.log(result);
}

// tryIfElse(2);
// trySwitch(2);
// tryTernary(2);

/*
true && true => true
true && false => false
false && true => false
false && false => false

true || true => true
true || false => true
false || true => true
false || false => false
*/
function branching1(v1: number, v2: number) {
  if (v1 === 400 && v2 === 700) {
    return "the value is 400 and 700";
  } else if (v1 !== 400 && v2 === 700) {
    return "the value is not 400 but 700";
  } else if (v1 === 400 && v2 !== 700) {
    return "the value is 400 but not 700";
  } else {
    return "the value is not 400 nor 700";
  }
}

console.log(branching1(400, 600));
