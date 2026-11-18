const nilai = [80, 75, 90, 65, 85, 95, 70];

console.log("Seluruh nilai:", nilai);

const nilaiTertinggi = Math.max(...nilai);
const nilaiTerendah = Math.min(...nilai);
console.log("Nilai Tertinggi:", nilaiTertinggi);
console.log("Nilai Terendah:", nilaiTerendah);

const totalNilai = nilai.reduce((acc, curr) => acc + curr, 0);
const rataRata = totalNilai / nilai.length;
console.log("Rata-rata nilai:", rataRata.toFixed(2));

const mahasiswaLulus = nilai.filter(n => n >= 75);
console.log("Jumlah mahasiswa yang lulus (nilai >= 75):", mahasiswaLulus.length);