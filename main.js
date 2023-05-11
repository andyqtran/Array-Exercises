function domId(id) {
    return document.getElementById(id);
}

var numArray = [];
domId("addNumberBtn").onclick = function () {
    var num = domId("num").value * 1;
    numArray.push(num);
    console.log(numArray);
    var numString = numArray.join(", ");
    domId("array").innerHTML = numString;
};

domId("btn1").onclick = function () {
    var total = numArray.reduce(function (acc, curr) {
        if (curr > 0) {
            return acc + curr;
        }

        return acc;
    }, 0);

    domId("result1").innerHTML = total;
};

domId("btn2").onclick = function () {
    var count = numArray.reduce(function (acc, curr) {
        if (curr > 0) {
            return ++acc;
        }

        return acc;
    }, 0);

    domId("result2").innerHTML = count;
};

function min(array) {
    return array.reduce(function (acc, curr) {
        return Math.min(acc, curr);
    });
}

domId("btn3").onclick = function () {
    var minValue = min(numArray);
    domId("result3").innerHTML = minValue;
};

domId("btn4").onclick = function () {
    var newArray = numArray.filter(function (num) {
        return num > 0;
    });

    if (newArray.length > 0) {
        var minValue = min(newArray);
        domId("result4").innerHTML = minValue;
    } else {
        alert("Mảng không có số dương");
    }
};

domId("btn5").onclick = function () {
    var evenNum = -1;
    for (var i = numArray.length - 1; i >= 0; i--) {
        if (numArray[i] % 2 === 0) {
            evenNum = numArray[i];
            break;
        }
    }
    if (evenNum != -1) {
        domId("result5").innerHTML = evenNum;
    } else {
        alert("Mảng không có số chẵn");
    }
};

domId("btn6").onclick = function () {
    var num1 =
        document.querySelector(".form-6 .col-6:first-of-type input").value * 1;
    var num2 =
        document.querySelector(".form-6 .col-6 + .col-6 input").value * 1;

    if (
        num1 >= numArray.length ||
        num2 >= numArray.length ||
        num1 < 0 ||
        num2 < 0
    ) {
        alert("Số vị trí nhập không hợp lệ");
        return;
    }

    var newArray = numArray.slice(0);
    var temp = newArray[num1];
    newArray[num1] = newArray[num2];
    newArray[num2] = temp;

    domId("result6").innerHTML = newArray.join(", ");
};

function sortArray(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = array.length - 1; j > i; j--) {
            if (array[j] < array[j - 1]) {
                var temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
}

domId("btn7").onclick = function () {
    var newArray = numArray.slice(0);
    sortArray(newArray);
    domId("result7").innerHTML = newArray.join(", ");
};

function primeCheck(num) {
    if (num <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

domId("btn8").onclick = function () {
    var primeNum = numArray.find(function (num) {
        return primeCheck(num);
    });
    if (primeNum != undefined) {
        domId("result8").innerHTML = primeNum;
    } else {
        alert("Mảng không có số nguyên tố");
    }
};

domId("btn9").onclick = function () {
    var count = numArray.reduce(function (acc, cur) {
        if (Number.isInteger(cur)) {
            return ++acc;
        }
        return acc;
    }, 0);

    domId("result9").innerHTML = count;
};

domId("btn10").onclick = function () {
    var countNegative = numArray.reduce(function (acc, cur) {
        if (cur < 0) {
            return ++acc;
        }

        return acc;
    }, 0);

    var countPositive = numArray.reduce(function (acc, cur) {
        if (cur > 0) {
            return ++acc;
        }

        return acc;
    }, 0);

    if (countNegative < countPositive) {
        domId("result10").innerHTML = "Số âm < số dương";
    } else if (countNegative > countPositive) {
        domId("result10").innerHTML = "Số âm > số dương";
    } else {
        domId("result10").innerHTML = "Số âm = số dương";
    }
};
