// Fungsi untuk kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        case "pangkat":
            hasil = Math.pow(angka1, angka2);
            break;
        case "akar":
            if (angka1 < 0) {
                return "Error: Tidak dapat menghitung akar kuadrat dari angka negatif";
            }
            hasil = Math.sqrt(angka1);
            break;
        case "modulus":
            if (angka2 === 0) {
                return "Error: Modulus dengan nol tidak diperbolehkan";
            }
            hasil = angka1 % angka2;
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

// Fungsi untuk menangani event klik
function handleClick(operasi) {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || (operasi !== "akar" && isNaN(angka2))) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, operasi);
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${hasil}</p>`;
    }
}

// Event listener untuk operasi matematika
document.getElementById("btn-tambah").addEventListener("click", () => handleClick("tambah"));
document.getElementById("btn-kurang").addEventListener("click", () => handleClick("kurang"));
document.getElementById("btn-kali").addEventListener("click", () => handleClick("kali"));
document.getElementById("btn-bagi").addEventListener("click", () => handleClick("bagi"));
document.getElementById("btn-pangkat").addEventListener("click", () => handleClick("pangkat"));
document.getElementById("btn-akar").addEventListener("click", () => handleClick("akar"));
document.getElementById("btn-modulus").addEventListener("click", () => handleClick("modulus"));
