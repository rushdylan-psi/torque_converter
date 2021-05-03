var menu = document.getElementById('conversion-select');
btn.addEventListener('click', generateTorque);

function generateTorque(event) {
    event.preventDefault();
    var result = 0;
    var inputVal = document.getElementById('inputFtlb').value;
    if (menu.value == '1') {     
      result = inputVal * 12;
    } else if (menu.value == '2') {
      result = inputVal * 1.3;
      //alert(inputVal + ' is equal to ' + result);
    }
    document.getElementById('output').innerHTML = inputVal + ' Foot pounds is equal to ' + result + ' inch pounds.';
}

// 5 ft lbs is equal to 60 in lbs
// 5 ft lbs is equal to 6.5 nm



