const hargaBarang = 25000;
const jumlahBarang = 4;
const diskonPersen = 0.10; // 10%

const totalSebelumDiskon = hargaBarang * jumlahBarang;
const besaranDiskon = totalSebelumDiskon * diskonPersen;
const totalPembayaran = totalSebelumDiskon - besaranDiskon;

console.log("Total Harga Sebelum Diskon: Rp" + totalSebelumDiskon);
console.log("Besaran Diskon: Rp" + besaranDiskon);
console.log("Total Pembayaran Setelah Diskon: Rp" + totalPembayaran);