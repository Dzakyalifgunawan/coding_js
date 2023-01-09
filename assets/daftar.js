function cekformdaftar() {
    let kodedaftar = "MHS";
    // document.getElementById("kode").value = kodedaftar;
    let tanggal_hariini = new Date();
    // console.log(tanggal_hariini);
    let bulan = tanggal_hariini.getMonth();
    let tahun = tanggal_hariini.getFullYear();
    document.getElementById("kode").value = kodedaftar + bulan + tahun;
}
z
document.getElementById("formdaftar").onload = function() {
    cekformdaftar();
}

document.getElementById("nama").onkeyup = function() {
    let txtnama = document.getElementById("nama").value;
    let txtnama2 = txtnama.toUpperCase(); // toUpperCase = Untuk Memperbesar Huruf 
    document.getElementById("nama").value = txtnama2;
}

document.getElementById("tempat").onkeyup = function() {
    let txttempat = document.getElementById("tempat").value;
    let txttempat2 = txttempat.toUpperCase();
    document.getElementById("tempat").value = txttempat2;
}

document.getElementById("btn").onclick = function() {
    let kode = document.getElementById("kode").value;
    let nama = document.getElementById("nama").value;
    let tempat = document.getElementById("tempat").value;
    let tanggal = document.getElementById("tanggal").value;
    let email = document.getElementById("email").value;
    let jk ="";

    if(document.getElementById("gridRadios1").checked == true) {
        jk = document.getElementById("gridRadios1").value;
    }else if (document.getElementById("gridRadios2").checked == true) {
        jk = document.getElementById("gridRadios2").value;  
    }

    let game = "";
    let coding = "";
    let badminton = "";

    if(document.getElementById("game").checked == true) {
        game = "Game";
    }if(document.getElementById("coding").checked == true) {
        coding = "Coding";
    }if(document.getElementById("badminton").checked == true) {
        badminton = "Badminton";
    }

    let hobby = game + "," + coding + "," + badminton
    let alamat = document.getElementById("alamat").value;
    console.log(hobby);

    let datatabel = "<tr>";
    datatabel +=  "<td>" + kode + "</td>";
    datatabel +=  "<td>" + nama + "</td>";
    datatabel +=  "<td>" + tempat + "," + tanggal + "</td>";
    datatabel +=  "<td>" + email + "</td>";
    datatabel +=  "<td>" + jk + "</td>";
    datatabel +=  "<td>" + hobby + "</td>";
    datatabel +=  "<td>" + alamat + "</td>";
    document.getElementById("rows_tabel").innerHTML = datatabel;
}

function pendaftaran() {
//     var namax, tempatx, tanggalx, emailx, lakix, perempuanx, badmintonx, gamex, alamatx, codingx;
//     namax = document.forms['datapribadi']['nama'].value;
//     tempatx = document.forms['datapribadi']['tempat'].value;
//     tanggalx = document.forms['datapribadi']['tanggal'].value;
//     emailx = document.forms['datapribadi']['email'].value;
//     jenisx = document.forms['datapribadi']['jenis'].value;
//     hobbyx = document.forms['datapribadi']['hobby'].value;
//     lakix = document.forms['datapribadi']['gridRadios1'].value;
//     perempuanx = document.forms['datapribadi']['gridRadios2'].value;
//     badmintonx = document.forms['datapribadi']['badminton'].value;
//     gamex = document.forms['datapribadi']['game'].value;
//     codingx = document.forms['datapribadi']['coding'].value;
//     alamatx = document.forms['datapribadi']['alamat'].value;
    
//     var tabelx = document.getElementById("table1").value;
//     var baris = tabelx.insertRow(1);
//     var kol1 = baris.insertCell(0);
//     var kol2 = baris.insertCell(1);
//     var kol3 = baris.insertCell(2);
//     var kol4 = baris.insertCell(3);
//     var kol5 = baris.insertCell(4);
//     var kol6 = baris.insertCell(5);
//     var kol7 = baris.insertCell(6);

//    kol2.innerHTML = namax;
//    kol3.innerHTML = tempatx;
//    kol3.innerHTML = tanggalx;
//    kol4.innerHTML = emailx;
//    kol5.innerHTML = perempuanx;
//    kol5.innerHTML = lakix;
//    kol6.innerHTML = gamex;
//    kol6.innerHTML = badmintonx;
//    kol6.innerHTML = codingx;
//    kol7.innerHTML = alamatx;

var waktu = new Date(); 
        document.getElementById("tanggal").innerHTML = waktu;
        document.write(waktu);

   clear();
}

function clear() {
    document.getElementById("nama").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("tempat").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gridRadios1").value = "";
    document.getElementById("gridRadios2").value = "";
    document.getElementById("game").value = "";
    document.getElementById("coding").value = "";
    document.getElementById("badminton").value = "";
    document.getElementById("alamat").value = "";
}

