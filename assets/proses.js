console.log("Hello javascript!!");
console.log("ini contoh eksternal js");
document.write("Belajar Javascript Mudah!");

var nama = "Dzaky Alif Gunawan";// nama --> variabel 
var nama = "Anjay";
let alamat = "Sidoarjo";
alamat = "Inggris";
const no_telepon  = "082143645200";
// no_telepon = "051"; (const itu nilainya tetap tidak boleh diganti)
let jns_kelamin = "Pria atau Wanita";
var datasiswa = ["daud","syarif","fero","dzaky"]; 
var rekap = {nama: "Dzaky", asal: "Sidoarjo"};//{nama:"Dzaky",asal: "Sidoarjo"} nama --> attribut, "Dzaky" --> Value
const nilaiUTS = 90;
const nilaiQuiz = 60;
let nilai1 = nilaiUTS + nilaiQuiz;
let nilai2 = nilaiUTS - nilaiQuiz;
let nilai3 = nilaiUTS * nilaiQuiz; 
let nilai4 = nilaiUTS / nilaiQuiz;
let nilai5 = nilaiUTS ** nilaiQuiz;
let nilai6 = nilaiUTS % nilaiQuiz;
let nilai7 = 4;
nilai7++;
let nilai8 = 4;
nilai8--; 
// let hasil = nilai7++;
// hasil++ ini tidak akan muncul hasilnya 
let x = 10;
let y = 5;
let h = (x += y);
//let h = (x += y); x = 10 + 5 = 15 
//(x += y); x = 15 + 5 = 20 karena x sudah ada hasil dari let h x = 15 
let tes = 300 % 2; 
let rekap1 = {nilai9: 90, nilai10: 30};
let beasiswa = null;
let remidial;
let rekap2 = [90,30]; 

document.write("<br>"+nama,"<br>"+alamat,"<br>"+ no_telepon);
document.write("<br/>" + alamat + " , Telp."+ no_telepon);
document.write("<br/>"+ nama + "<br/>"+ jns_kelamin);
document.write("<br>" + datasiswa[3]);
document.write("<br>" + rekap.nama,", "+rekap.asal);
document.write("<br> Hasil Penjumlahan: " + nilai1);
document.write("<br> Hasil Pengurangan: " + nilai2);
document.write("<br> Hasil Perkalian: " + nilai3);
document.write("<br> Hasil Pembagian: " + nilai4);
document.write("<br> Hasil Pangkat: " + nilai5);
document.write("<br> Hasil sisa Pembagian: " + nilai6);
document.write("<br> Increment: " + nilai7);
document.write("<br> Decrement: " + nilai8);
document.write("<br> Hasil Penjumlahan: " + (x += y) + "," + h);
document.write("<br> hasil tes: " + tes + "<hr>");
document.write("<br> Hasil: " + (rekap1.nilai9 *= rekap1.nilai10));
document.write("<br> Beasiswa: " + beasiswa);
document.write("<br> Remidial: " + remidial);
document.write("<br> Hasil: " + (rekap2[0] += rekap2[1]));