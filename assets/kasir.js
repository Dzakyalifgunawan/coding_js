function kodenama() {
    let a = "INV"
    let b = "001"
    let tanggal = new Date();
    let tanggalsekarang = tanggal.getDate();
    let tahun = tanggal.getFullYear();
    document.getElementById("invace").value = a + tanggalsekarang + tahun + b
    let carabayar = ["tunai", "nontunai"];
    let jenis = "";

    for (let i = 0; i<carabayar.length; i++){
        jenis += '<input class="form-check-input" type="radio" name="tunai" id="' + carabayar[i] + '" />' + carabayar[i] + "";
    }
    document.getElementById("jenisbayar").innerHTML = jenis;
}

document.getElementById("kodedaftar").onload = function() {
    kodenama();
}

document.getElementById("kode").onkeyup = function() {
    let kode = document.getElementById("kode").value;
    let kodex = kode.toUpperCase();
    document.getElementById("kode").value = kodex;
}

function jenis2(){
    let jenis = document.getElementById("form").jenis.value;
    if(jenis == "Makanan"){
        document.getElementById("jenis1").innerHTML = "Makanan";
    }else if(jenis == "Minuman"){
        document.getElementById("jenis1").innerHTML = "Minuman";
    }else if(jenis == "Snack"){
        document.getElementById("jenis1").innerHTML = "Snack";
    }
}

document.getElementById("btn").onclick = function() {
    let c = document.getElementById("kode").value;
    let d = document.getElementById("nama").value;
    let harga = document.getElementById("harga").value;
    let jualbeli = document.getElementById("jumlah").value;
    
    let h;

    if(document.getElementById("tunai").checked == true) {
        h = "Tunai";
    }else if (document.getElementById("nontunai").checked == true) {
        h = "Non Tunai";  
    }else{
        h = ("Operator Belum Diisi");
    };

    jenis2();

    document.getElementById("kode1").innerHTML = c;
    document.getElementById("nama1").innerHTML = d;
    document.getElementById("jumlah1").innerHTML = jualbeli;
    document.getElementById("pembayaran").innerHTML = h;
    
    

    total(jualbeli, harga);
}    

function total(jualbeli, harga){
    let diskon;
    if(jualbeli > 10){
        diskon = document.getElementById("diskon").innerHTML = "2%";
    }if(diskon == "2%"){
        let first = (jualbeli*harga)*2/100;
        let sc = (jualbeli*harga)-first;
        document.getElementById("tb").innerHTML = sc;
    }else{
        first = (jualbeli*harga);
        document.getElementById("tb").innerHTML = first;
    }
}

document.getElementById("namamenu").onchange = function(){
    let bs = document.getElementById("namamenu").value;
    let harga = 0;

    if(bs == "Bakso"){
        harga = 20000;
    }else if(bs == "Mie Ayam"){
        harga = 30000;
    }else {
        harga = 50000;
    }
    document.getElementById("harga").value = harga;
}

document.getElementById("jumlah").onchange = function(){
    let harga = document.getElementById("harga").value;
    let jualbeli = document.getElementById("jumlah").value;
    total = harga * jualbeli;

    alert(total);
}