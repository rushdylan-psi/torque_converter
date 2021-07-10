

var menu = document.getElementById('conversion-select');
var btn = document.getElementById("btn");
btn.addEventListener("click", generateTorque);

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("leftgear");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

function generateTorque(event) {
    //event.preventDefault();
    var result = 0;
    var inputVal = document.getElementById('inputFtlb').value;
    if (menu.value == '1') {     
      result = inputVal * 12;
    } else if (menu.value == '2') {
      result = inputVal * 1.3;
    }
    document.getElementById('output').innerHTML = inputVal + ' is equal to ' + result;
}