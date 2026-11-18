const produk = {
  nama: "Laptop",
  harga: 7500000,
  stok: 10,
  kategori: "Elektronik"
};

// Menampilkan nama dan harga produk
console.log("Nama Produk:", produk.nama);
console.log("Harga Produk:", produk.harga);

// Mengubah stok menjadi 5
produk.stok = 5;

// Menambahkan properti merek dengan nilai Lenovo
produk.merek = "Lenovo";

// Menampilkan seluruh properti object
console.log("Seluruh Properti Object:", produk);