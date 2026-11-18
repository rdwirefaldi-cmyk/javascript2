const mahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra ", nilai: 90 },
  { nama: "Doni", nilai: 70 },
  { nama: "Eka", nilai: 95 }
];

// Mahasiswa yang lulus (nilai >= 75)
const mahasiswaLulus = mahasiswa.filter(m => m.nilai >= 75);
console.log("Mahasiswa Lulus:", mahasiswaLulus);

// Mahasiswa yang tidak lulus (nilai < 75)
const mahasiswaTidakLulus = mahasiswa.filter(m => m.nilai < 75);
console.log("Mahasiswa Tidak Lulus:", mahasiswaTidakLulus);

// Jumlah mahasiswa yang lulus
console.log("Jumlah Mahasiswa Lulus:", mahasiswaLulus.length);

// Mengurutkan data berdasarkan nilai tertinggi (Descending)
const urutNilaiTertinggi = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
console.log("Urutan Berdasarkan Nilai Tertinggi:", urutNilaiTertinggi);