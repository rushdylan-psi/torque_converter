
btn.addEventListener('click', myFunction);

function myFunction (ev){
    ev.preventDefault(); //prevent default submit
    var N = document.getElementById("inputFtlb").value
    document.getElementById("output").innerHTML = N * 12;
}





