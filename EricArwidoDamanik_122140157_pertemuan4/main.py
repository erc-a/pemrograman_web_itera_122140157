import math_operations
from math_operations import PI

def main():
    print("Program Penghitung Luas dan Keliling")
    print("--------------------------------------------------")
    print("Pilih Fungsi:")
    print("1. Luas Persegi")
    print("2. Keliling Persegi")
    print("3. Luas Persegi Panjang")
    print("4. Keliling Persegi Panjang")
    print("5. Luas Lingkaran")
    print("6. Keliling Lingkaran")
    print("7. Konversi Suhu Celsius ke Fahrenheit")
    print("8. Konversi Suhu Celsius ke Kelvin")
    print("--------------------------------------------------")

    while True:
        choice_str = input("Masukkan pilihan (1-8): ")
        if choice_str.isdigit():
            choice = int(choice_str)
            if 1 <= choice <= 8:
                break
            else:
                print("Pilihan tidak valid. Masukkan angka antara 1 dan 8.")
        else:
            print("Input tidak valid. Masukkan angka.")

    if choice == 1:
        sisi = float(input("Masukkan sisi persegi: "))
        print("Luas persegi:", math_operations.luas_persegi(sisi))

    elif choice == 2:
        sisi = float(input("Masukkan sisi persegi: "))
        print("Keliling persegi:", math_operations.keliling_persegi(sisi))

    elif choice == 3:
        panjang = float(input("Masukkan panjang persegi panjang: "))
        lebar = float(input("Masukkan lebar persegi panjang: "))
        print("Luas persegi panjang:", math_operations.luas_persegi_panjang(panjang, lebar))

    elif choice == 4:
        panjang = float(input("Masukkan panjang persegi panjang: "))
        lebar = float(input("Masukkan lebar persegi panjang: "))
        print("Keliling persegi panjang:", math_operations.keliling_persegi_panjang(panjang, lebar))

    elif choice == 5:
        jari_jari = float(input("Masukkan jari-jari lingkaran: "))
        print("Luas lingkaran:", math_operations.luas_lingkaran(jari_jari))
        print(f"(dengan PI = {PI:.5f})")

    elif choice == 6:
        jari_jari = float(input("Masukkan jari-jari lingkaran: "))
        print("Keliling lingkaran:", math_operations.keliling_lingkaran(jari_jari))
        print(f"(dengan PI = {PI:.5f})")

    elif choice == 7:
        celsius = float(input("Masukkan suhu dalam Celsius: "))
        print("Suhu dalam Fahrenheit:", math_operations.celsius_to_fahrenheit(celsius))

    elif choice == 8:
        celsius = float(input("Masukkan suhu dalam Celsius: "))
        print("Suhu dalam Kelvin:", math_operations.celsius_to_kelvin(celsius))

if __name__ == "__main__":
    main()