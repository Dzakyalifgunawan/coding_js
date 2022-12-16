// let a = 0;
// let b = 10;
// let c = 0;
// let d = 10;

// for(let e = 1; e <= 10; i++) {
//     if(e %2 == 0) {
//         if(e == 2) {
//             document.write("Bilangan Genap: ");
//         }
//     document.write(i + ",");
//     }
// }

// do {
//     console.log(d);
//     d--;
// }while(d > 0);

// do {
//     console.log(a);
//     a++;
// }while(a < 3);


// while(b >= 1) {
//     console.log(b);
//     b--;
// }

// while(c >= 10) {
//     console.log(c);
//     c++;
// }

let menu = ["Kalkulator", "Pertandingan Bola", "Pendaftaran","Setting"];
// panjang array = 3, index = 0 sampai 2 
let jumlah = menu.length; // 4
for (let i = 0; i < jumlah; i++) {
    console.log(menu[i]);
}

function kalkulator() {
    let nilai1 = document.getElementById('nilai1').value;
    let nilai2 = document.getElementById('nilai2').value;
    let operator = document.getElementById('operator').value; 
    console.log(nilai1 + "," + nilai2 + "," + operator);

    if(nilai1 == "" || nilai1 == null) {
        alert ("Nilai-1 Belum Diisi");
    }else if (nilai2 == "" || nilai2 == null) {
        alert ("Nilai-2 Belum Diisi");
    }else if (operator == "" || operator == null) {
        alert ("Operator Belum Diisi");
    }
}