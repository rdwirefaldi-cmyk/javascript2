const nama = "  muhammad rizki  ";

// Menghilangkan spasi di awal dan akhir
const namaTrimmed = nama.trim();

// Mengubah menjadi huruf besar dan kecil
const hurufBesar = namaTrimmed.toUpperCase();
const hurufKecil = namaTrimmed.toLowerCase();

// Menghitung jumlah karakter setelah spasi dihilangkan
const jumlahKarakter = namaTrimmed.length;

console.log("Nama bersih:", `"${namaTrimmed}"`);
console.log("Huruf Besar:", hurufBesar);
console.log("Huruf Kecil:", hurufKecil);
console.log("Jumlah Karakter:", jumlahKarakter);