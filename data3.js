function tentukanPredikat(nilai) {
    if (nilai < 0 || nilai > 100) {
        return "Nilai tidak valid (harus berada di rentang 0 - 100)";
    } else if (nilai >= 85) {
        return "Predikat: A";
    } else if (nilai >= 75) {
        return "Predikat: B";
    } else if (nilai >= 65) {
        return "Predikat: C";
    } else if (nilai >= 50) {
        return "Predikat: D";
    } else {
        return "Predikat: E";
    }
}

console.log(tentukanPredikat(85)); // Predikat: A
console.log(tentukanPredikat(110)); // Nilai tidak valid