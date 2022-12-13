document.getElementById("judul").innerText = "Halo Ngab";
document.getElementById("judul").style.color = "Blue";
// document.getElementsByTagName("h1")[0].innerHTML = "Yoooo Ngab"; 
// document.getElementsByClassName("title")[0].innerHTML = "Yoooo";
// document.getElementById("username").value = "Dzaky"; // mendenfinisikan Value 
// document.getElementById("password").value = "Dzaky";
document.getElementById("buttonlogin");

let userlog = "Dzaky";
let passlog = "Dzaky";

//function tanpa parameter
function checklogin() {
    let usernamex, passwordx;
    usernamex = document.getElementById("username").value;// Menampung Value
    passwordx = document.getElementById("password").value;
    alert("Proses Cek Login: " + usernamex + "-" + passwordx);
    console.log("Testing :" + usernamex + "-" + passwordx);
    pesan("Login Berhasil, ", usernamex);
    
}

//function dgn parameter
function pesan(msg, user) {
    alert(msg + user); 
    clear();// untuk menghapus hasil yang di input    
}

function clear() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}