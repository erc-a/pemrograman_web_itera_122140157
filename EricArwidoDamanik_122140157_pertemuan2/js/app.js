import { Tugas, ambilData, simpanData } from "./modules/data.js";
import { formatTanggal } from "./modules/utils.js";

// Global state
let semuaTugas = ambilData();
let isEditMode = false;
let taskToEdit = null;

export const initApp = () => {
    const form = document.getElementById("form-tugas");
    const list = document.getElementById("daftar-tugas");
    const submitButton = document.getElementById("submit-btn");

    if (submitButton) submitButton.textContent = "Tambah Tugas";

    form?.addEventListener("submit", (event) => {
        event.preventDefault();

        const judul = document.getElementById("judul")?.value.trim();
        const matkul = document.getElementById("matkul")?.value.trim();
        const deadline = document.getElementById("deadline")?.value;

        if (!judul || !matkul || !deadline) {
            showNotification("Semua field harus diisi!");
            return;
        }

        if (isEditMode && taskToEdit) {
            taskToEdit.judul = judul;
            taskToEdit.matkul = matkul;
            taskToEdit.deadline = deadline;
            showNotification("Tugas berhasil diperbarui!");
        } else {
            const tugasBaru = new Tugas(judul, matkul, deadline);
            semuaTugas.push(tugasBaru);
            showNotification("Tugas berhasil ditambahkan!");
        }

        simpanData(semuaTugas);
        renderTugas(list);
        form.reset();

        isEditMode = false;
        taskToEdit = null;
        if (submitButton) submitButton.textContent = "Tambah Tugas";
    });

    renderTugas(list);
};

const renderTugas = (list) => {
    if (!list) return;
    
    list.innerHTML = "";
    semuaTugas.forEach((tugas) => {
        const item = document.createElement("li");
        item.innerHTML = `
            <div class="tugas-item">
                <div class="tugas-content">
                    <h3>${tugas.judul}</h3>
                    <p>${tugas.matkul}</p>
                    <p>Deadline: ${formatTanggal(tugas.deadline)}</p>
                </div>
                <div class="tugas-actions">
                    <button data-id="${tugas.id}" class="edit-btn">Edit</button>
                    <button data-id="${tugas.id}" class="hapus-btn">Hapus</button>
                </div>
            </div>
        `;
        
        list.appendChild(item);
    });

    document.querySelectorAll(".hapus-btn").forEach(btn => {
        btn.addEventListener("click", (e) => hapusTugas(e.target.dataset.id));
    });

    document.querySelectorAll(".edit-btn").forEach(btn => {
        btn.addEventListener("click", (e) => editTugas(e.target.dataset.id));
    });
};

const hapusTugas = (id) => {
    semuaTugas = semuaTugas.filter(tugas => tugas.id !== id);
    simpanData(semuaTugas);
    renderTugas(document.getElementById("daftar-tugas"));
    showNotification("Tugas berhasil dihapus!");
};

const editTugas = (id) => {
    const tugas = semuaTugas.find(t => t.id === id);
    if (!tugas) return;

    document.getElementById("judul").value = tugas.judul;
    document.getElementById("matkul").value = tugas.matkul;
    document.getElementById("deadline").value = tugas.deadline;

    isEditMode = true;
    taskToEdit = tugas;

    const submitButton = document.getElementById("submit-btn");
    if (submitButton) submitButton.textContent = "Simpan Perubahan";
};

const showNotification = (message) => {
    alert(message);
};
