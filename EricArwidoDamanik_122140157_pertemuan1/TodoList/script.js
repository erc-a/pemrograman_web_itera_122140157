const taksInput = document.querySelector(".taks-input input");
const taksBox = document.querySelector(".taks-box");
const filters = document.querySelectorAll(".filters span");
const clearBtn = document.querySelector(".clear-btn");

let todos = JSON.parse(localStorage.getItem("taks-list")) || [];
let filterStatus = "All"; // Default menampilkan semua tugas

// Fungsi untuk menampilkan tugas berdasarkan filter yang aktif
function showTaks() {
    let li = "";
    todos.forEach((taks, index) => {
        let isCompleted = taks.status === "Completed" ? "checked" : "";
        
        if (filterStatus === "All" || taks.status === filterStatus) {
            li += `
                <li class="taks">
                    <label for="taks-${index}">
                        <input onclick="updateStatus(this)" type="checkbox" id="taks-${index}" data-index="${index}" ${isCompleted}>
                        <p class="${isCompleted ? "checked" : ""}">${taks.name}</p>
                    </label>
                    <div class="settings">
                        <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                        <ul class="taks-menu">
                            <li onclick="editTaks(${index})"><i class="uil uil-pen"></i> Edit</li>
                            <li onclick="deleteTaks(${index})"><i class="uil uil-trash"></i> Delete</li>
                        </ul>
                    </div>
                </li>
            `;
        }
    });
    taksBox.innerHTML = li || "<p class='empty'>No tasks available</p>";
}

// Fungsi untuk mengubah filter tampilan tugas
filters.forEach(filter => {
    filter.addEventListener("click", () => {
        document.querySelector(".filters .active").classList.remove("active");
        filter.classList.add("active");
        filterStatus = filter.id;
        showTaks();
    });
});

// Fungsi untuk menampilkan menu opsi tugas
function showMenu(selectedTaks) {
    let taksMenu = selectedTaks.parentElement.lastElementChild;
    taksMenu.classList.toggle("show");

    document.addEventListener("click", function closeMenu(e) {
        if (!selectedTaks.contains(e.target)) {
            taksMenu.classList.remove("show");
            document.removeEventListener("click", closeMenu);
        }
    }, { once: true });
}

// Fungsi untuk menghapus tugas
function deleteTaks(deleteId) {
    todos.splice(deleteId, 1);
    localStorage.setItem("taks-list", JSON.stringify(todos));
    showTaks();
}

// Fungsi untuk mengedit tugas
function editTaks(taksId) {
    taksInput.value = todos[taksId].name;
    taksInput.setAttribute("data-editing", taksId); // Menandai bahwa kita sedang mengedit tugas
}

// Fungsi untuk memperbarui status tugas (Completed/Pending)
function updateStatus(selectedTaks) {
    let index = selectedTaks.getAttribute("data-index");
    let taksName = selectedTaks.nextElementSibling;

    if (selectedTaks.checked) {
        taksName.classList.add("checked");
        todos[index].status = "Completed";
    } else {
        taksName.classList.remove("checked");
        todos[index].status = "Pending";
    }
    localStorage.setItem("taks-list", JSON.stringify(todos));
    showTaks();
}

// Fungsi untuk menghapus semua tugas
clearBtn.addEventListener("click", () => {
    todos = [];
    localStorage.setItem("taks-list", JSON.stringify(todos));
    showTaks();
});

// Event listener untuk menambahkan atau mengedit tugas
taksInput.addEventListener("keyup", e => {
    let userTaks = taksInput.value.trim();
    let editingIndex = taksInput.getAttribute("data-editing");

    if (e.key === "Enter" && userTaks) {
        if (editingIndex !== null) {
            todos[editingIndex].name = userTaks; // Mengedit tugas yang sudah ada
            taksInput.removeAttribute("data-editing"); // Menghapus atribut setelah diedit
        } else {
            let taksInfo = { name: userTaks, status: "Pending" };
            todos.push(taksInfo);
        }
        
        localStorage.setItem("taks-list", JSON.stringify(todos));
        taksInput.value = "";
        showTaks();
    }
});

// Menampilkan tugas saat pertama kali dijalankan
showTaks();
