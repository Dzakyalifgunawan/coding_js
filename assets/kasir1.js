function kodenama() {
    let a = "INV"
    let b = "001"
    let tanggal = new Date();
    let tanggalsekarang = tanggal.getDate();
    let tahun = tanggal.getFullYear();
    document.getElementById("invace").value = a + tanggalsekarang + tahun + b
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