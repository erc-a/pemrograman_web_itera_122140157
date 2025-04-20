function useBookStats(books) {
    const total = books.length;
    const dimiliki = books.filter(b => b.status === 'miliki').length;
    const dibaca = books.filter(b => b.status === 'baca').length;
    const dibeli = books.filter(b => b.status === 'beli').length;
  
    return { total, dimiliki, dibaca, dibeli };
  }
  
  export default useBookStats;
  