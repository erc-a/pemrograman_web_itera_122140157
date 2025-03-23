function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    let errors = [];

    // Validasi nama
    if (name.length <= 3) {
        errors.push("Nama harus lebih dari 3 karakter.");
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Email tidak valid.");
    }

    // Validasi password
    if (password.length < 8) {
        errors.push("Password harus minimal 8 karakter.");
    }

    // Menampilkan hasil validasi
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    
    alert("Form berhasil divalidasi!");
    return true;
}
