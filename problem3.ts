function jajanBoba(uang: number, callback: (arg0: string, arg1: number) => void) {
    setTimeout(() => {
      const hargaBoba = 5000;
      if (uang >= hargaBoba) {
        const sisaUang = uang - hargaBoba;
        callback("boba", sisaUang);
      } else {
        callback(`Maaf uang kamu tidak cukup untuk membeli boba sisa uang kamu sebesar ${uang}`, 0);
      }
    }, 5000);
  }
  
  function jajanSeblak(uang: number, callback: (arg0: string, arg1: number) => void) {
    setTimeout(() => {
      const hargaSeblak = 8000;
      if (uang >= hargaSeblak) {
        const sisaUang = uang - hargaSeblak;
        callback("seblak", sisaUang);
      } else {
        callback(`Maaf uang kamu tidak cukup untuk membeli seblak sisa uang kamu sebesar ${uang}`, 0);
      }
    }, 9000);
  }
  
  jajanBoba(20000, (barang: string, sisaUang: number) => {
    console.log(`Kamu jajan ${barang} dengan harga Rp.5000 sisa uang kamu Rp.${sisaUang}`);
    jajanSeblak(sisaUang, (barang: string, sisaUang: number) => {
      console.log(`Kamu jajan ${barang} dengan harga Rp.8000 sisa uang kamu Rp.${sisaUang}`);
    });
  });
  
  jajanBoba(10000, (barang: string, sisaUang: number) => {
    console.log(`Kamu jajan ${barang} dengan harga Rp.5000 sisa uang kamu Rp.${sisaUang}`);
    jajanSeblak(sisaUang, (barang: string, sisaUang: number) => {
      console.log(`Kamu jajan ${barang} dengan harga Rp.8000 sisa uang kamu Rp.${sisaUang}`);
    });
  });