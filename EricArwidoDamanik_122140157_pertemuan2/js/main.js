import { initApp } from "./app.js";
import { getWaktuLokal, formatTanggal } from "./modules/utils.js";
import { getCuaca, getLocation, interpretWeatherCode } from "./modules/weather.js";

document.addEventListener("DOMContentLoaded", async () => {
    initApp();
  
    const waktuEl = document.getElementById("waktu-lokal");
    const waktu = await getWaktuLokal();
    if (waktuEl) waktuEl.textContent = `${waktu}`;
  
    const cuacaEl = document.getElementById("info-cuaca");
    try {
        const { latitude, longitude } = await getLocation();
        const dataCuaca = await getCuaca(latitude, longitude);
        if (dataCuaca && cuacaEl) {
            const kondisi = interpretWeatherCode(dataCuaca.kondisi);
            cuacaEl.textContent = `${kondisi}, ${dataCuaca.suhu}°C`;
        } else if (cuacaEl) {
            cuacaEl.textContent = "Cuaca tidak tersedia";
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        if (cuacaEl) cuacaEl.textContent = "Tidak bisa mengakses lokasi/cuaca";
    }
});