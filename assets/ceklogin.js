document.getElementById("judul").innerText = "Halo Ngab";
document.getElementById("judul").style.color = "Blue";
// document.getElementsByTagName("h1")[0].innerHTML = "Yoooo Ngab"; 
// document.getElementsByClassName("title")[0].innerHTML = "Yoooo";
// document.getElementById("username").value = "Dzaky"; // mendenfinisikan Value 
// document.getElementById("password").value = "Dzaky";
document.getElementById("buttonlogin");

const userlog = "Dzaky";
const passlog = "Dzaky";

//function tanpa parameter
function checklogin(home) {
    let usernamex, passwordx;
    usernamex = document.getElementById("username").value;// Menampung Value
    passwordx = document.getElementById("password").value;
    
    // jika Username dan Password menggunakan AND
    if((usernamex == userlog) && (passwordx == passlog)) {
        alert('Username Benar');
        window.location = home; // atau window.location.href = "home.html"; (tanpa Parameter)
    } else {
        alert('Username Salah');
        clear();
    }
    
    // jika Username dan password menggunakan if else
    // if(usernamex == userlog) {
    //     alert('Username Benar');
    // } else {
    //     alert('Username Salah');
    //     document.getElementById("username").value = "";
    // }
    // if(passwordx == passlog) {
    //     alert('Password Benar');
    // } else {
    //     alert('Password Salah');
    //     document.getElementById("password").value = "";
    // }

    // alert("Proses Cek Login: " + usernamex + "-" + passwordx);
    // console.log("Testing :" + usernamex + "-" + passwordx);
    // pesan("Login Berhasil, ", usernamex);
    
}

//function dgn parameter
// function pesan(msg, user) {
//     alert(msg + user); 
//     clear();// untuk menghapus hasil yang di input    
// }

function clear() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}