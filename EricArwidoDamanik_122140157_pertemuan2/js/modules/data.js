export class Tugas {
    constructor(judul, matkul, deadline) {
        this.id = crypto.randomUUID();
        this.judul = judul;
        this.matkul = matkul;
        this.deadline = deadline;
    }
}


export const ambilData = () => {
    return JSON.parse(localStorage.getItem("tugasKuliah")) || [];
}

export const simpanData = (data) => {
    localStorage.setItem("tugasKuliah", JSON.stringify(data));
}