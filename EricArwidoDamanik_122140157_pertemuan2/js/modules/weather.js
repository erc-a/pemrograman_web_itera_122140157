export const getCuaca = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      if (!response.ok) throw new Error("Gagal ambil data cuaca");
  
      const data = await response.json();
      return {
        suhu: data.current_weather.temperature,
        kondisi: data.current_weather.weathercode,
      };
    } catch (error) {
      console.error("Cuaca error:", error);
      return null;
    }
  };
  
  export const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation tidak didukung");
      } else {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            resolve({ latitude, longitude });
          },
          (err) => reject("Gagal dapat lokasi")
        );
      }
    });
  };
  
  export const interpretWeatherCode = (code) => {
    const map = {
        0: "Cerah",
        1: "Cerah Berawan",
        2: "Cerah Berawan",
        3: "Berawan",
        45: "Berawan", // Kabut
        48: "Berawan", // Kabut es
        51: "Hujan Ringan",
        53: "Hujan Ringan",
        55: "Hujan Lebat",
        56: "Hujan Ringan", // Gerimis beku ringan
        57: "Hujan Lebat", // Gerimis beku lebat
        61: "Hujan Ringan",
        63: "Hujan Ringan",
        65: "Hujan Lebat",
        66: "Hujan Ringan", // Hujan beku ringan
        67: "Hujan Lebat", // Hujan beku lebat
        71: "Hujan Ringan", // Salju ringan
        73: "Hujan Ringan", // Salju sedang
        75: "Hujan Lebat", // Salju lebat
        77: "Berawan", // Butiran salju
        80: "Hujan Ringan", // Hujan rintik ringan
        81: "Hujan Ringan", // Hujan rintik sedang
        82: "Hujan Lebat", // Hujan rintik deras
        85: "Hujan Ringan", // Hujan salju ringan
        86: "Hujan Lebat", // Hujan salju lebat
        95: "Hujan Lebat", // Badai petir ringan atau sedang
        96: "Hujan Lebat", // Badai petir dengan hujan es ringan
        99: "Hujan Lebat"  // Badai petir dengan hujan es lebat
    };
    return map[code] || "Cuaca tidak diketahui";
  };
  