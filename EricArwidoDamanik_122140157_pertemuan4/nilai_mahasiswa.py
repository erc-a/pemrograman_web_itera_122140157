# List data mahasiswa
mahasiswa = [
    {"nama": "Ni Ketut Citra Covida Karantina", "nim": "122140101", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 80},
    {"nama": "Covid Hidayat", "nim": "122140102", "nilai_uts": 70, "nilai_uas": 75, "nilai_tugas": 65},
    {"nama": "Muhammad Caesar Al Covid", "nim": "122140103", "nilai_uts": 60, "nilai_uas": 55, "nilai_tugas": 70},
    {"nama": "Dinas Komunikasi Informatika Statistik", "nim": "122140104", "nilai_uts": 40, "nilai_uas": 50, "nilai_tugas": 45},
    {"nama": "Mohammad Akbar Republik Indonesia Anshori", "nim": "122140105", "nilai_uts": 90, "nilai_uas": 95, "nilai_tugas": 85},
]

# Fungsi untuk menghitung nilai akhir
def hitung_nilai_akhir(uts, uas, tugas):
    return (0.3 * uts) + (0.4 * uas) + (0.3 * tugas)

# Fungsi untuk menentukan grade
def tentukan_grade(nilai_akhir):
    if nilai_akhir >= 80:
        return "A"
    elif nilai_akhir >= 70:
        return "B"
    elif nilai_akhir >= 60:
        return "C"
    elif nilai_akhir >= 50:
        return "D"
    else:
        return "E"

# Menambahkan nilai akhir dan grade ke data mahasiswa
for mhs in mahasiswa:
    nilai_akhir = hitung_nilai_akhir(mhs["nilai_uts"], mhs["nilai_uas"], mhs["nilai_tugas"])
    mhs["nilai_akhir"] = nilai_akhir
    mhs["grade"] = tentukan_grade(nilai_akhir)

# Menentukan mahasiswa dengan nilai tertinggi dan terendah
mahasiswa_tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
mahasiswa_terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

# Menampilkan data mahasiswa dalam format tabel
print("-" * 100)
print(f"| {'Nama':<41} | {'NIM':<10} | {'UTS':<5} | {'UAS':<5} | {'Tugas':<6} | {'Akhir':<6} | {'Grade':<5} |")
print("-" * 100)

for mhs in mahasiswa:
    nama_pendek = (mhs['nama'][:41] + '...') if len(mhs['nama']) > 41 else mhs['nama']
    print(f"| {nama_pendek:<41} | {mhs['nim']:<10} | {mhs['nilai_uts']:<5} | {mhs['nilai_uas']:<5} | {mhs['nilai_tugas']:<6} | {mhs['nilai_akhir']:<6.2f} | {mhs['grade']:<5} |")

print("-" * 100)

# Menampilkan mahasiswa dengan nilai tertinggi dan terendah
print("\nMahasiswa dengan nilai tertinggi:")
print(f"Nama: {mahasiswa_tertinggi['nama']}, NIM: {mahasiswa_tertinggi['nim']}, Nilai Akhir: {mahasiswa_tertinggi['nilai_akhir']:.2f}, Grade: {mahasiswa_tertinggi['grade']}")

print("\nMahasiswa dengan nilai terendah:")
print(f"Nama: {mahasiswa_terendah['nama']}, NIM: {mahasiswa_terendah['nim']}, Nilai Akhir: {mahasiswa_terendah['nilai_akhir']:.2f}, Grade: {mahasiswa_terendah['grade']}")