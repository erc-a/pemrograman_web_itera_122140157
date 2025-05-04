from abc import ABC, abstractmethod

# Kelas Abstrak LibraryItem
class LibraryItem(ABC):
    def __init__(self, id_item, judul, penulis, tahun):
        self._id_item = id_item
        self._judul = judul
        self._penulis = penulis
        self._tahun = tahun

    @abstractmethod
    def tampilkan_info(self):
        pass

    @property
    def judul(self):
        return self._judul

    @property
    def id_item(self):
        return self._id_item

    @property
    def penulis(self):
        return self._penulis

    @property
    def tahun(self):
        return self._tahun

# Subclass Buku
class Buku(LibraryItem):
    def __init__(self, id_item, judul, penulis, tahun, penerbit, halaman):
        super().__init__(id_item, judul, penulis, tahun)
        self._penerbit = penerbit
        self.__halaman = halaman  # private

    @property
    def halaman(self):
        return self.__halaman

    def tampilkan_info(self):
        return (f"ID Buku: {self.id_item}, Judul: {self.judul}, Penulis: {self.penulis}, "
                f"Tahun: {self.tahun}, Penerbit: {self._penerbit}, Halaman: {self.halaman}")

# Subclass Majalah
class Majalah(LibraryItem):
    def __init__(self, id_item, judul, penulis, tahun, edisi):
        super().__init__(id_item, judul, penulis, tahun)
        self.__edisi = edisi  # private

    @property
    def edisi(self):
        return self.__edisi

    def tampilkan_info(self):
        return (f"ID Majalah: {self.id_item}, Judul: {self.judul}, Penulis: {self.penulis}, "
                f"Tahun: {self.tahun}, Edisi: {self.edisi}")

# Kelas Perpustakaan
class Perpustakaan:
    def __init__(self):
        self._koleksi = []

    def tambah_item(self, item):
        self._koleksi.append(item)
        print(f"Item '{item.judul}' berhasil ditambahkan ke perpustakaan.")

    def tampilkan_semua_item(self):
        if not self._koleksi:
            print("Tidak ada item dalam perpustakaan.")
        for item in self._koleksi:
            print(item.tampilkan_info())

    def cari_item(self, kata_kunci):
        ditemukan = False
        for item in self._koleksi:
            if str(item.id_item).lower() == str(kata_kunci).lower() or item.judul.lower() == str(kata_kunci).lower():
                print(item.tampilkan_info())
                ditemukan = True
        if not ditemukan:
            print(f"Item dengan judul atau ID '{kata_kunci}' tidak ditemukan di perpustakaan.")

# Contoh Penggunaan
if __name__ == "__main__":
    perpustakaan = Perpustakaan()

    data_buku = [
        (101, "Pemrograman Dasar", "Andi Nugroho", 2019, "Informatika", 250),
        (102, "Algoritma dan Struktur Data", "Budi Santoso", 2020, "Graha Ilmu", 300),
        (103, "Kecerdasan Buatan", "Citra Lestari", 2021, "TeknoPress", 280),
        (104, "Jaringan Komputer", "Dedi Kurniawan", 2018, "Media Komputindo", 310),
        (105, "Pengantar Basis Data", "Eka Prasetya", 2022, "Andi Publisher", 275),
        (106, "Desain UI/UX", "Fajar Ramadhan", 2020, "Rekayasa Media", 220),
        (107, "Pemrograman Web", "Gita Mawar", 2021, "Pustaka Edukasi", 260),
        (108, "Etika Profesi TI", "Hadi Saputra", 2019, "Global Media", 190),
        (109, "Analisis Sistem", "Ira Sari", 2022, "Mitra Informatika", 310),
        (110, "Pemrograman Mobile", "Joko Purnomo", 2023, "NextGen", 295)
    ]

    data_majalah = [
        (201, "Teknologi Masa Depan", "Rina Yuliana", 2021, "Edisi April"),
        (202, "Info Gadget", "Yusuf Hidayat", 2020, "Edisi Juni"),
        (203, "Coding Today", "Nina Fadilah", 2022, "Edisi Maret"),
        (204, "AI Weekly", "Toni Suherman", 2023, "Edisi Mei"),
        (205, "Jurnal Informatika", "Putri Cahyani", 2021, "Edisi Desember"),
        (206, "Dunia Startup", "Arif Rahman", 2019, "Edisi Februari"),
        (207, "Cyber Life", "Wulan Febrianti", 2022, "Edisi September"),
        (208, "Game Developer", "Rafi Irawan", 2020, "Edisi Juli"),
        (209, "Data Science Bulletin", "Sinta Amelia", 2023, "Edisi Januari"),
        (210, "Robotika", "Bayu Saputra", 2021, "Edisi Oktober")
    ]

    for b in data_buku:
        buku = Buku(*b)
        perpustakaan.tambah_item(buku)

    for m in data_majalah:
        majalah = Majalah(*m)
        perpustakaan.tambah_item(majalah)

    print("\nDaftar Item Perpustakaan:")
    perpustakaan.tampilkan_semua_item()

    kata_kunci = input("\nMasukkan judul atau ID untuk mencari: ")
    perpustakaan.cari_item(kata_kunci)