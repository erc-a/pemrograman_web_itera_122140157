# Program Penghitung BMI (Body Mass Index)

print("Program Penghitung BMI (Body Mass Index)")
print("-----------------------------------------")

# Input berat badan (kg) dan tinggi badan (cm)
berat = float(input("Masukkan berat badan (kg): "))
tinggi = float(input("Masukkan tinggi badan (m): "))

# Hitung BMI
bmi = berat / (tinggi * tinggi)

# Tentukan kategori BMI
if bmi < 18.5:
    kategori = "Kekurangan berat badan"
    if bmi < 16:
        kelompok = "Sangat kurus"
    elif bmi >= 16 and bmi < 16.9:
        kelompok = "Cukup kurus"
    else :
        kelompok = "Sedikit Kurus"
elif bmi >= 18.5 and bmi <= 25:
    kategori = "Normal"
    kelompok = "Normal atau Ideal"
elif bmi >= 25 and bmi < 30:
    kategori = "Kelebihan berat badan"
    if bmi >= 25 and bmi < 27:
        kategori = "Kelebihan berat badan"
        kelompok = "Pra-obesitas"
else:
    kategori = "Obesitas"
    if bmi < 35:
        kelompok = "Obesitas Kelas 1 (Sedang)"
    elif bmi < 40:
        kelompok = "Obesitas Kelas 2 (Parah)"
    else:
        kelompok = "Obesitas Kelas 3 (Sangat Parah)"

# Tampilkan hasil
print("BMI Kamu: {:.2f}".format(bmi))
print("Kategori BMI: {}".format(kategori))
print("Kelompok BMI: {}".format(kelompok))



