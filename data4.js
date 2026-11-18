let angkaGenap = [];
let angkaGanjil = [];
let jumlahGenap = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        angkaGenap.push(i);
        jumlahGenap += i;
    } else {
        angkaGanjil.push(i);
    }
}

console.log("Angka Genap (1-100):", angkaGenap.join(", "));
console.log("Angka Ganjil (1-100):", angkaGanjil.join(", "));
console.log("Jumlah seluruh angka genap:", jumlahGenap);