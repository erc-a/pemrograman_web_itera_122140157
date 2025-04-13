export const formatTanggal = (tanggal) => {
    return new Date(tanggal).toLocaleDateString("id-ID");
  };
  
  export const getWaktuLokal = () => {
    const now = new Date();
    return now.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  