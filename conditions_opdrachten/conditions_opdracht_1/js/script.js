//javascript code
function check() {
    var saldo = document.getElementById("saldo").Value;

    if (saldo<25) {
        document.getElementById("tekst").innerHTML = "uw saldo is te laag";
    } else {
        document.getElementById("tekst").innerHTML = "";
    
    }
    
}